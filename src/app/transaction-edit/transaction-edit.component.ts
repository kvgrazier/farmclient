import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
export class Account {
  AccountNumber: number;
  AccountDescription: string;
}
@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html'
})
export class TransactionEditComponent implements OnInit {
  accounts:  Account[];
  transactionForm: FormGroup;
  id: string = '';

  constructor(private router: Router, private route: ActivatedRoute,
    private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.api.getAccountList()
    .subscribe(res => this.accounts = res);
    this.transactionForm = this.formBuilder.group({
      TransactionID : [null, Validators.required],
      TransactionDate : [null, Validators.required],
      TransactionDescription : [null, Validators.required],
      AccountNumber : [null, Validators.required],
      AccountAmount : [null, Validators.required]
    });
    this.getTransaction(this.route.snapshot.params['id']);
  }

  getTransaction(id) {
    this.api.getTransaction(id).subscribe(data => {
      this.id = data._id;
      this.transactionForm.setValue({
        TransactionID: data.TransactionID,
        TransactionDate: data.TransactionDate,
        // TransactionDate: new DatePipe('en-US').transform(data.TransactionDate, 'MM-dd-yyyy'),
        TransactionDescription: data.TransactionDescription,
        AccountNumber: data.AccountNumber,
        AccountAmount: data.AccountAmount
      });
    });
  }
  onFormSubmit(form: NgForm) {
   this.api.updateTransaction(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/transaction-details', id], { queryParamsHandling:'merge'});
        }, (err) => {
          console.log(err);
        }
      );
  }
  transactionDetails() {
    this.router.navigate(['/transaction-details', this.id],{ queryParamsHandling: 'preserve' });
  }

}
