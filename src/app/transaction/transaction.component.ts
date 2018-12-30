import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html'
})

export class TransactionComponent implements OnInit {

  transactions: any;
  displayedColumns = ['TransactionID', 'TransactionDate', 'TransactionDescription',
  'AccountNumber', 'AccountAmount','AccountName','Person'];
  dataSource = new TransactionDataSource(this.route, this.api);
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let Person = this.route.snapshot.queryParams.person;
    let fromDate = this.route.snapshot.queryParams.fromdate;
    this.api.getTas(
      this.route.snapshot.queryParams.person,
      this.route.snapshot.queryParams.fromdate,
      this.route.snapshot.queryParams.todate)
      .subscribe(res => {
        console.log(res);
        this.transactions = res;
      }, err => {
        console.log(err);
      });
  }
}

export class TransactionDataSource extends DataSource<any> {
  constructor(private route: ActivatedRoute, private api: ApiService) {
    super();
  }
  connect() {
    return this.api.getTas(
      this.route.snapshot.queryParams.person,
      this.route.snapshot.queryParams.fromdate,
      this.route.snapshot.queryParams.todate);
  }
  disconnect() {
  }
}

