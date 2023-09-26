import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, interval, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return interval(4000).pipe(
      switchMap(() => this.http.get('http://localhost:8080/api/v1/employee'))
    );
  }
}
