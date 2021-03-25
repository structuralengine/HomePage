import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { parseString } from 'xml2js';

@Component({
  selector: 'app-home-news',
  templateUrl: './news.component.html',
  styleUrls: ['../home.component.scss', './news.component.scss']
})
export class HomeNewsComponent implements OnInit  {
  constructor(private http: HttpClient) {}

  public RssData: any[] = new Array();

  ngOnInit(): void {

    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http.get("https://note.com/structuralengine/rss", {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    })
    .subscribe(
      response => {
        parseString(response, (err, result) => {
          if(err) {   
              console.log('There was an error when parsing: ' + err);
          } else {
              console.log('The JSON version is: ' + JSON.stringify(result));
              this.RssData.push({

              })
          }
        })
      },
      error => {
        console.log(error);
      }
    );
  }
 }
