import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLoginPageComponent } from './site-login-page/site-login-page/site-login-page.component';
import { SiteHomePageComponent } from './site-home-page/site-home-page.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AddEmployeeComponent } from './employee-CRUD/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './employee-CRUD/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './employee-CRUD/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './employee-CRUD/view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLoginPageComponent,
    SiteHomePageComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    FormLoginComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [AuthenticationServic],
  bootstrap: [AppComponent]
})
export class AppModule { }
