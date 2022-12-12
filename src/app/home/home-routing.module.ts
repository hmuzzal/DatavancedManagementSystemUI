import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterEmployeeComponent } from '../employees/register-employee/register-employee.component';
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    { path: 'employees', loadChildren: () => import('../employees/employees.module').then(m => m.EmployeesModule) },
    { path: 'register', component: RegisterEmployeeComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
