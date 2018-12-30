import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html'
})
export class AccountEditComponent implements OnInit {
  accountForm: FormGroup;
   id: string = '';

  constructor(private router: Router, private route: ActivatedRoute,
    private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.accountForm = this.formBuilder.group({
      AccountNumber : [null, Validators.required],
      AccountName : [null, Validators.required],
      TaxFormRef : [null, Validators.required]
       ,Active : [null, Validators.required]
       ,AccountPersonName : [null]
      // ,'AccountSubType.AccountSubTypeName' : [null, Validators.required]
      // ,'AccountSubType.SortOrder' : [null, Validators.required]
      // ,'AccountSubType.AccountType.AccountTypeName' : [null]
    });
    this.getAccount(this.route.snapshot.params['id']);
  }

  getAccount(id) {
    this.api.getAccount(id).subscribe(data => {
      this.id = data._id;
      this.accountForm.setValue({
        AccountNumber: data.AccountNumber,
        AccountName: data.AccountName,
        TaxFormRef: data.TaxFormRef
        ,Active: data.Active
/*         ,AccountPersonName: data.AccountPerson.AccountPersonName,
        ,'AccountSubType.AccountSubTypeName': data.AccountSubType.AccountSubTypeName,
        ,'AccountSubType.SortOrder': data.AccountSubType.SortOrder,
        ,'AccountSubType.AccountType.AccountTypeName': data.AccountSubType.AccountType.AccountTypeName  */
      });
    });
  }
  onFormSubmit(form: NgForm) {
   this.api.updateAccount(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/account-details', id], { queryParamsHandling:'merge'});
        }, (err) => {
          console.log(err);
        }
      );
  }
  accountDetails() {
    this.router.navigate(['/account-details', this.id],{ queryParamsHandling: 'preserve' });
  }

}
