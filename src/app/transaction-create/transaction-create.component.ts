import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

export class Account {
  AccountNumber: number;
  AccountDescription: string;
}
@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})

export class TransactionCreateComponent implements OnInit {
  accounts:  Account[];
  transactionForm: FormGroup;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.api.getAccountList()
    .subscribe(res => this.accounts = res);
    this.transactionForm = this.formBuilder.group({
//      TransactionID : [null, Validators.required],
      TransactionDate : [null, Validators.required],
      TransactionDescription : [null, Validators.required],
      AccountNumber : [null, Validators.required],
      AccountAmount : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postTransaction(form)
      .subscribe(res => {
        // const id = res['_id'];
          let id = res['_id'];
          // this.router.navigate(['/users'], { queryParamsHandling: 'preserve' });
          this.router.navigate(['/transaction-details', id], { queryParamsHandling: 'preserve' });
        }, (err) => {
          console.log(err);
        });
  }
}

