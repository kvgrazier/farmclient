import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html'
})
export class TransactionDetailComponent implements OnInit {

  transaction = {};
  getTransactionDetails(id) {
    this.api.getTransaction(id)
      .subscribe(data => {
        console.log(data);
        this.transaction = data;
      });
  }
  deleteTransaction(id) {
    this.api.deleteTransaction(id)
      .subscribe(res => {
          this.router.navigate(['/transactions'], { queryParamsHandling: 'preserve' });
        }, (err) => {
          console.log(err);
        }
      );
  }
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }
  ngOnInit() {
    this.getTransactionDetails(this.route.snapshot.params['id']);
  }

}
