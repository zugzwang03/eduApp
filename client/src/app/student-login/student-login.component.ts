import { Component, Input } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentLogin } from '../student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.css'
})
export class StudentLoginComponent {
  @Input() studentLogin: StudentLogin = {
    email: '',
    password: ''
  }
  constructor(private studentService: StudentService, private router: Router) { }
  login() {
    this.studentService.studentLogin(this.studentLogin).subscribe(res => {
      if (JSON.parse(JSON.stringify(res)).student) {
        console.log('login successful');
        this.router.navigateByUrl('home');
      } else {
        console.log('login failed');
        this.router.navigateByUrl('student-login');
      }
    });
  }
}
