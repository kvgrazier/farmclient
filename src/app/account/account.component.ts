import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  accounts: any;
  displayedColumns = ['AccountNumber','AccountName','TaxFormRef','Active',
  'AccountPerson.AccountPersonName','AccountSubType.AccountSubTypeName',
  'AccountSubType.SortOrder','AccountSubType.AccountType.AccountTypeName'];
  accountdataSource = new AccountDataSource(this.route, this.api);
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.api.getAccounts()
      .subscribe(res => {
        console.log(res);
        this.accounts = res;
      }, err => {
        console.log(err);
      });
  }
}

export class AccountDataSource extends DataSource<any> {
  constructor(private route: ActivatedRoute, private api: ApiService) {
    super();
  }
  connect() {
    return this.api.getAccounts();
  }
  disconnect() {
  }
}
