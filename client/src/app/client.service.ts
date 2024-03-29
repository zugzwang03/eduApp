import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
  postSubjectiveQs(question: string): Observable<string> {
    return this.http.get<string>(`http://localhost:3000/api/v1/detailedSubjectiveQs?question=${question}`);
  }
}
