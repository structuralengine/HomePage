import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-home-news',
  templateUrl: './news.component.html',
  styleUrls: ['../home.component.scss', './news.component.scss']
})
export class HomeNewsComponent implements OnInit { 

  public url: string =
  "https://asia-northeast1-the-structural-engine.cloudfunctions.net/note-rss";
  // "https://asia-northeast1-the-structural-engine.cloudfunctions.net/note-rss";
  

public options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

  constructor(private http: HttpClient,){}

  ngOnInit() {

    const url = 'https://google.com';

    this.http.get(this.url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      })
    })
      .subscribe(
        response => {
          // 通信成功時の処理（成功コールバック）
          console.log('通信成功!!', response);
        },
        error => {
          console.log(error);
        }
      );


  }


}
