import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pl',
  templateUrl: './pl.component.html',
  styles: []
})
export class PLComponent implements OnInit {
  pl: any;
  displayedColumns = ['AccountType','AccountSubType','AccountNumber','AccountName','Amount','Person','SortOrder'];
  dataSource = new PLDataSource(this.route, this.api);
  constructor(private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let Person = this.route.snapshot.queryParams.person;
    let fromDate = this.route.snapshot.queryParams.fromdate;
    let toDate = this.route.snapshot.queryParams.todate;
    this.api.getPL(
      Person,
      fromDate,
      toDate)
      .subscribe(res => {
        console.log(res);
        this.pl = res;
      }, err => {
        console.log(err);
      });
  }
}

export class PLDataSource extends DataSource<any> {
  constructor(private route: ActivatedRoute, private api: ApiService) {
    super();
  }
  connect() {
    return this.api.getPL(
      this.route.snapshot.queryParams.person,
      this.route.snapshot.queryParams.fromdate,
      this.route.snapshot.queryParams.todate);
  }
  disconnect() {
  }
}
