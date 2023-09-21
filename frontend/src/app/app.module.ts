import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteLoginPageComponent } from './site-login-page/site-login-page.component';
import { SiteHomePageComponent } from './site-home-page/site-home-page.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SiteFooterComponent } from './site-footer/site-footer.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { AddEmployeeComponent } from './employee-CRUD/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './employee-CRUD/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './employee-CRUD/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './employee-CRUD/view-employee/view-employee.component';
import { AuthenticationService } from './auth-service/auth-service.service';

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
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
