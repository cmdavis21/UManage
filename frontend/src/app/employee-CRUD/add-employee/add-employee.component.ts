import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../auth-service/auth-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  name: string = '';
  phoneNumber: string = '';
  supervisors: string = '';
  displayNewEmployee: any[] | null = null;
  success: string | null = null; // message for successful submission of employee
  error: string | null = null; // error message for failed submission of employee

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  submitEmployee() {

    const newEmployee = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      supervisors: this.supervisors
    }

    // make HTTP POST request to add employee
    this.authService.post('employee/add', newEmployee).subscribe(
      (response: HttpResponse<any>) => {
        console.log("Employee added successfully", response);
        this.success = "Employee successfully added";   
        this.error = null;

        //reset form fields
        this.name = '';
        this.phoneNumber = '';
        this.supervisors = '';
      },
      (error) => {
        console.error("Error adding employee", error);
        // this.success = null;
        // this.error = "Error adding employee. Please try again."
      }
    );
  }
}
