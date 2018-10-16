import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {

  transactions: any;
  displayedColumns = ['TransactionID', 'TransactionDate', 'TransactionDescription', 'AccountNumber', 'AccountAmount'];
  dataSource = new TransactionDataSource(this.api);
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getTransactions()
      .subscribe(res => {
        console.log(res);
        this.transactions = res;
      }, err => {
        console.log(err);
      });
  }

}

export class TransactionDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }
  connect() {
    return this.api.getTransactions();
  }
  disconnect() {
  }
}

