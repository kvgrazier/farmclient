import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html'
})
export class AccountCreateComponent implements OnInit {
  accountForm: FormGroup;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      AccountNumber : [null],
      AccountName : [null, Validators.required],
      TaxFormRef : [null, Validators.required]
      ,Active : [null, Validators.required]
      ,'AccountPerson.AccountPersonName' : []
      ,'AccountSubType.AccountSubTypeName' : [null, Validators.required]
      ,'AccountSubType.SortOrder' : [null, Validators.required]
      ,'AccountSubType.AccountType.AccountTypeName' : [null]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postAccount(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/account-details', id], { queryParamsHandling: 'preserve' });
        }, (err) => {
          console.log(err);
        });
  }
}
