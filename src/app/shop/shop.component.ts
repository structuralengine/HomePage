import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  public ngOnInit() {
    this.invokeStripeCheckout();
  }

  private invokeStripeCheckout() {
    // 決済 stripe のソースを body に埋め込む
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      window.document.body.appendChild(script);
    }
  }


  public makePayment(amount: any): void {
    const myStripeCheckout = (<any>window).StripeCheckout;
    const paymentHandler = myStripeCheckout.configure({
      key: 'pk_test_feXANuMavbqDI0fNHJdNhGk2',
      locate: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken.card);
        alert('stripe token generated!');
      }
    });

    paymentHandler.open({
      name: 'Technical Adda',
      description: '4 Products Added',
      amount: amount * 100
    })

  }

}
