import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentService } from './student.service';
import { studentRegistration } from './student';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, TitleBarComponent, HomeComponent, ServicesComponent, ContactUsComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = '';
  student: studentRegistration = {
    email: "student1@gmail.com",
    rollNumber: 90,
    phoneNumber: 7689052478,
    firstName: "Student",
    lastName: "1",
    address: "Student 1's address",
    password: "Student1@90"
  };
  constructor(private studentService: StudentService, private dialog: MatDialog) { }
  ngOnInit() {
    this.studentRegister();
  }
  async studentRegister() {
    await this.studentService.studentRegistration(this.student).subscribe(res => {
      console.log(JSON.parse(JSON.stringify(res)).message);
    })
  }
  openDialogBox() {
    let dialogRef = this.dialog.open(PopUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }

}
