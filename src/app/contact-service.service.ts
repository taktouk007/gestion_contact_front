import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Contact } from './shared/IContact';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  getAllContacts() : Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:8080/contacts').pipe(
      catchError(this.handleError)
    );
  }
  getContact(id: number) : Observable<Contact> {
    return this.http.get<Contact>('http://localhost:8080/contact/'+id).pipe(
      catchError(this.handleError)
    );
  }
  saveContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('http://localhost:8080/contact/save', contact).pipe(
      catchError(this.handleError)
    );
  }
  deleteContact(id: number): Observable<{}> {
    return this.http.delete('http://localhost:8080/contact/delete/'+id).pipe(
      catchError(this.handleError)
    );
  }



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
    return throwError(
      'Something bad happened; please try again later.');
  };
}
