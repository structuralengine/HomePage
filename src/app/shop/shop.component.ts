import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public stripekey: string = 'pk_test_feXANuMavbqDI0fNHJdNhGk2';
  public handler: any;

  public ngOnInit() {
    // イベント
    $('#btn-register-card').on('click', () => {
      this.openHandler();
    });
    this.handler = StripeCheckout.configure({
      key: this.stripekey,
      locale: 'ja',
      opened: () => { },
      token: (source) => {
        console.log(source);
      }
    });
  }

  public openHandler() {
    this.handler.open({
      name: '大久保将広',
      description: 'クレジットカードの変更',
      email: 'info@masahiro.me',
      allowRememberMe: false,
      panelLabel: '変更'
    });
  }
}