import { Injectable } from '@angular/core';
import { ContactModel } from '../contact/contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contact: ContactModel;
  constructor(private http: HttpClient) { }
  getContact(): Observable<any> {
    return this.http.get('http://localhost:3000/Contact/get-all');
  }
  getcountry() {
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe (
    );
  }
}
