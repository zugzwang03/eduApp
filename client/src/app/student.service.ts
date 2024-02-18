import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentLogin, studentRegistration } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  studentRegistration(student: studentRegistration): Observable<string> {
    return this.http.post<string>('http://localhost:3000/api/v1/student/register', student);
  }
  studentLogin(student: StudentLogin): Observable<string> {
    return this.http.post<string>('http://localhost:3000/api/v1/student/login', student); 
  }
}
