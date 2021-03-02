import { Component } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./global.css','./normalize.css']
})
export class ShopComponent {
  cardCaptureReady = false

  onStripeInvalid( error: Error ){
    console.log('Validation Error', error)
  }

  onStripeError( error: Error ){
    console.error('Stripe error', error)
  }

  setPaymentMethod( token: stripe.paymentMethod.PaymentMethod ){
    console.log('Stripe Payment Method', token)
  }

  setStripeToken( token: stripe.Token ){
    console.log('Stripe Token', token)
  }

  setStripeSource( source: stripe.Source ){
    console.log('Stripe Source', source)
  }
}