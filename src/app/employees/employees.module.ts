import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    EmployeesComponent,
    RegisterEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatDialogModule
  ],
  providers: [

  ]
})
export class EmployeesModule { }
