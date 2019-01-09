import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-control',
  templateUrl: './transaction-control.component.html',
  styles: []
})
export class TransactionControlComponent implements OnInit {
  transactionForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }
  ngOnInit() {
      this.transactionForm = this.formBuilder.group({
        person: 'Mike',
        fromDate: new Date('1/1/2017'),
        toDate: new Date('12/31/2017')
      });
    }
    ontransactionSubmit() {
      let Person = this.transactionForm.controls.person.value;
      let fromDate = new DatePipe('en-US').transform(this.transactionForm.controls.fromDate.value, 'MM-dd-yyyy');
      let toDate = new DatePipe('en-US').transform(this.transactionForm.controls.toDate.value, 'MM-dd-yyyy');
      let navigationExtras: NavigationExtras = {
        queryParams: { person: Person, fromdate: fromDate, todate: toDate }};
        this.router.navigate(['transactions'],navigationExtras);
      }
  }
