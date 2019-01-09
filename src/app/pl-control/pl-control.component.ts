import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router, NavigationExtras} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pl-control',
  templateUrl: './pl-control.component.html',
  styles: []
})
export class PlControlComponent implements OnInit {
  plForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.plForm = this.formBuilder.group({
        plperson: 'Mark',
        plfromDate: new Date('1/1/2017'),
        pltoDate: new Date('12/31/2017')
      });
    }
      onplSubmit() {
        let Person = this.plForm.controls.plperson.value;
        let fromDate = new DatePipe('en-US').transform(this.plForm.controls.plfromDate.value, 'MM-dd-yyyy');
        let toDate = new DatePipe('en-US').transform(this.plForm.controls.pltoDate.value, 'MM-dd-yyyy');
        let navigationExtras: NavigationExtras = {
          queryParams: { person: Person, fromdate: fromDate, todate: toDate }};
      this.router.navigate(['pl'],navigationExtras);
    }
  }
