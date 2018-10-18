import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  accountpersons: any;
  displayedColumns = ['person'];
  dataSource = new AccountPersonDataSource(this.api);
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAccountPersonList()
      .subscribe(res => {
        console.log(res);
        this.accountpersons = res;
      }, err => {
        console.log(err);
      });
    }}

export class AccountPersonDataSource extends DataSource<any> {
  constructor(private api: ApiService) {super(); }
  connect() {return this.api.getAccountPersonList(); }
  disconnect() {}}

