import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  constructor(public dialog: MatDialog) { }


  openRegistrationModal(): void {
    let dialogRef = this.dialog.open(RegisterEmployeeComponent, {
      width: '660px',
      position: {
        // top: '25vh',
        left: '37vw'
      },
    });
  }
}
