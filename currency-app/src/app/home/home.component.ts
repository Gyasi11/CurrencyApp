import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  rateUSD: any
  rateEUR: any
  endpoint = 'http://data.fixer.io/latest?access_key=a09ee58652dcda275398016195c7b149';

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {

    return this.http.get(this.endpoint).subscribe(
      data => {
        this.rateUSD = data["rates"].USD;
        this.rateEUR = data["rates"].EUR;
      }
    )
  }

  


}
