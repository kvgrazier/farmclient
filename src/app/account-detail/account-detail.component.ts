import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html'
})
export class AccountDetailComponent implements OnInit {
  account = {};
  getAccountDetails(id) {
    this.api.getAccount(id)
      .subscribe(data => {
        console.log(data);
        this.account = data;
      });
  }
  deleteAccount(id) {
    this.api.deleteAccount(id)
      .subscribe(res => {
          this.router.navigate(['/accounts'], { queryParamsHandling: 'preserve' });
        }, (err) => {
          console.log(err);
        }
      );
  }
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  ngOnInit() {
    this.getAccountDetails(this.route.snapshot.params['id']);
  }
}
