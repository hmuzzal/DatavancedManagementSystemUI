import { RegisterEmployeeComponent } from './employees/register-employee/register-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  {
    path: 'employees', children: [
      { path: '', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
      { path: 'register', component: RegisterEmployeeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
