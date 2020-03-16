import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  fname: any;
  LASTNAME: any;
  COMPANY: any;
  WEBSITE: any;
  EMAIL: any;
  USERNAME: any;
  PASSWORD: any;
  CONFIRMPASSWORD: any;
  PHONE: any;
  ADDRESS: any;
  STATE: any;
  MOREADDRESS: any;
  CITY: any;
  POSTCODE: any;
  smslimit: any;
  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get('http://localhost:3000/Client/get-all');
  }
}
