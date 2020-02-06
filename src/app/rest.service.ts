import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }
  employees = {};
  getEmployees() {
    return this.http.get("https://my-json-server.typicode.com/srsoumya96/testJSONDemo/employee", {headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
      );
  }
}