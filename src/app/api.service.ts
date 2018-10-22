import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

// we can now access environment.apiUrl
const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

// const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    // const body = res;
     let body = res;
    return body || { };
  }

  getTest(): string {
    return 'Test';
  }

  getPersonList(): Observable<any> {
    console.log(API_URL);
    return this.http.get(API_URL + '/accountpersonlist', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getTas(person: string, fromDate: Date, toDate: Date): Observable<any> {
    const url = `${API_URL}/ta/${person}/${fromDate}/${toDate}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getTransactions(): Observable<any> {
    console.log(API_URL);
    return this.http.get(API_URL + '/transaction', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getTransaction(id: string): Observable<any> {
    const url = `${API_URL}/transaction/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  postTransaction(data): Observable<any> {
    return this.http.post(API_URL + '/transaction', data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  updateTransaction(id: string, data): Observable<any> {
    const url = `${API_URL}/transaction/${id}`;
    return this.http.put(url, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  deleteTransaction(id: string): Observable<{}> {
    const url = `${API_URL}/transaction/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


}


