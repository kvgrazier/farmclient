import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  persons: any;
  dataSource = new PersonsDataSource(this.api);
  transactionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.api.getPersonList()
      .subscribe(res => {
        console.log(res);
        this.persons = res;
      }, err => {
        console.log(err);
      });
      this.transactionForm = this.formBuilder.group({
        person: [null],
        fromDate: '',
        toDate: ''
      });
      this.transactionForm.setValue({
        fromDate: new Date('1/1/2017'),
        toDate: new Date('12/31/2017')
      });
    }
    ontransactionSubmit() {
      let person = this.transactionForm.controls.person.value;
      console.log(person);
      let fromDate = new DatePipe('en-US').transform(this.transactionForm.controls.fromDate.value, 'MM-dd-yyyy');
      let toDate = new DatePipe('en-US').transform(this.transactionForm.controls.toDate.value, 'MM-dd-yyyy');
      this.router.navigate(['transactions', person, fromDate, toDate]);
    }
  }
export class PersonsDataSource extends DataSource<any> {
  constructor(private api: ApiService) {super(); }
  connect() {return this.api.getPersonList(); }
  disconnect() {}}

