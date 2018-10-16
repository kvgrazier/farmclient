import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';
import { UiModule } from './ui/ui.module';
import { AccountComponent } from './account/account.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
  {
    path: 'transactions',
    component: TransactionComponent,
    data: { title: 'Transaction List' }
  },
  {
    path: 'transaction-details/:id',
    component: TransactionDetailComponent,
    data: { title: 'Transaction Details' }
  },
  {
    path: 'transaction-create',
    component: TransactionCreateComponent,
    data: { title: 'Create Transaction' }
  },
  {
    path: 'transaction-edit/:id',
    component: TransactionEditComponent,
    data: { title: 'Edit Transaction' }
  },
  {
    path: 'accounts',
    component: AccountComponent,
    data: { title: 'Account List' }
  },
  {
    path: 'account-details/:id',
    component: AccountDetailComponent,
    data: { title: 'Account Details' }
  },
  {
    path: 'account-create',
    component: AccountCreateComponent,
    data: { title: 'Create Account' }
  },
  {
    path: 'account-edit/:id',
    component: AccountEditComponent,
    data: { title: 'Edit Account' }
  },
  {
    path: '',
    component: IndexComponent,
    data: { title: 'Home' }
    // redirectTo: '/index',
    // pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionDetailComponent,
    TransactionCreateComponent,
    TransactionEditComponent,
    AccountComponent,
    AccountCreateComponent,
    AccountDetailComponent,
    AccountEditComponent,
    IndexComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
