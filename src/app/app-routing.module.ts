import { NgModule } from '@angular/core';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountEditComponent } from './account-edit/account-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/transactions', pathMatch: 'full'},
   // ,{path: '', component: IndexComponent, data: { title: 'Home' }}
  {path: 'transactions', component: TransactionComponent, data: { title: 'Transaction List' }},
  {path: 'transaction-details/:id', component: TransactionDetailComponent, data: { title: 'Transaction Details' }},
  {path: 'transaction-create', component: TransactionCreateComponent, data: { title: 'Create Transaction' }},
  {path: 'transaction-edit/:id', component: TransactionEditComponent, data: { title: 'Edit Transaction' }},
  {path: 'accounts', component: AccountComponent, data: { title: 'Account List' }},
  {path: 'account-details/:id', component: AccountDetailComponent, data: { title: 'Account Details' }},
  {path: 'account-create', component: AccountCreateComponent, data: { title: 'Create Account' }},
  {path: 'account-edit/:id', component: AccountEditComponent, data: { title: 'Edit Account' }}
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}