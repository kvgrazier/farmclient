import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { AccountComponent } from './account/account.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
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
  // import { RouterModule, Routes } from '@angular/router';
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
    AccountEditComponent
  ],
  imports: [
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
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
