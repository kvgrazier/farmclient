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
  persons: any;
  // displayedColumns = ['person'];
  dataSource = new PersonsDataSource(this.api);
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getPersonList()
      .subscribe(res => {
        console.log(res);
        this.persons = res;
      }, err => {
        console.log(err);
      });
    }}

export class PersonsDataSource extends DataSource<any> {
  constructor(private api: ApiService) {super(); }
  connect() {return this.api.getPersonList(); }
  disconnect() {}}

