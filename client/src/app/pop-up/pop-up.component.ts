import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { RegistrationPopUpComponent } from '../registration-pop-up/registration-pop-up.component';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [MatDialogModule, RouterLink],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  constructor(private dialog: MatDialog) {}
  openDialogBox() {
    let dialogRef = this.dialog.open(RegistrationPopUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      
    })
  }

}
