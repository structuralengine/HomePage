import { Component } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  public products:any[] = [];

  constructor() { 
    this.products.push({
      name: '100ポイント分のチケット',
      description: 'これは 1000ポイント分のチケットを購入する',
      amount: '1000円',
      image: 'assets/img/raffle-ticket.jpg'
    })
  }

}