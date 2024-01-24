import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'student-login', component: StudentLoginComponent },
    { path: 'student-sign-up', component: StudentRegistrationComponent },
    { path: '**', redirectTo: 'home' },
];
