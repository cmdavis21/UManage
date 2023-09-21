import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteLoginPageComponent } from './site-login-page/site-login-page.component';
import { SiteHomePageComponent } from './site-home-page/site-home-page.component';
import { AddEmployeeComponent } from './employee-CRUD/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee-CRUD/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee-CRUD/delete-employee/delete-employee.component';
import { ViewEmployeeComponent } from './employee-CRUD/view-employee/view-employee.component';

const routes: Routes = [
  { path: '', component: SiteLoginPageComponent },
  { path: 'api/v1/employee', component: SiteHomePageComponent },
  { path: 'api/v1/employee/add', component: AddEmployeeComponent},
  { path: 'api/v1/employee/update', component: UpdateEmployeeComponent },
  { path: 'api/v1/employee/delete', component: DeleteEmployeeComponent },
  { path: 'api/v1/employee/view-all', component: ViewEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
