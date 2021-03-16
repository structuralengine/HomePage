import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StripeService, StripeCardComponent} from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss'],
})
export class PaymentFormComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  //card options style

  @Input() price;
  @Input() product;
  @Input() description;


  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  //other optional options
  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  stripeTest: FormGroup;

  constructor( private fb: FormBuilder, 
    private stripeService: StripeService,
    private httpclient: HttpClient
  ) {}

  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  createToken(): void {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  public paymentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });


  buy(formdata: FormData): void {

    if (this.stripeTest.valid) {}

    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          const headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
          );

          let obj = {
            token: result.token.id,
            email: formdata['email'],
            user: formdata['name'],
            amount: this.price,
            product: this.product,
            description: this.description,
          };

          //make a call to the server
          this.httpclient
            .post('http://localhost:8000/charge', JSON.stringify(obj), {
              headers: headers,
            })
            .subscribe((data) => {
              console.log('---- Transaction Data -----');
              //message from the API
              console.log(data);
            });

          console.log(result.token.id);
        } else if (result.error) {
          console.log(result.error.message);
        }
      });
  }

}
