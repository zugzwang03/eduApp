import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration-pop-up',
  standalone: true,
  imports: [ MatDialogModule, RouterLink],
  templateUrl: './registration-pop-up.component.html',
  styleUrl: './registration-pop-up.component.css'
})
export class RegistrationPopUpComponent {
  
}
