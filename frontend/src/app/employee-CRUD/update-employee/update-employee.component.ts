import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/auth-service/authentication.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  searchQuery: string = '';
  foundEmployees: any[] | null = null; // list of employees found from a search query
  name: string = '';
  phoneNumber: string = '';
  supervisors: string = '';
  success: string | null = null;
  error: string | null = null;

  // a variable to store the employee ID
  employeeId: number | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute, // inject ActivatedRoute to access route parameters
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    // get the employee ID from the route parameters
    this.route.params.subscribe((params) => {
      this.employeeId = +params['id']; // convert the parameter to a number
    });
  }

  searchEmployees() {
    this.authService.get('employee/search?query=' + this.searchQuery).subscribe(
      (response) => {
        const employee = response as any;

        if (employee) {
          console.log("Employee found:", employee);
          // this.name = employee.name;
          // this.phoneNumber = employee.phoneNumber;
          // this.supervisors = employee.supervisors;
          // this.success = "Employee found";
          this.foundEmployees = response;

        } else {
          console.error("Error searching for employee: Employee not found");
          this.success = null;
          this.error = "Employee not found. Please try again.";
        }
      },
      (error) => {
        console.error("Error searching for employee", error);
        this.success = null;
        this.error = "Error searching for employee. Please try again.";
      }
    );
  }

  updateEmployee() {
    if (this.employeeId === null) {
      console.error("Employee ID is missing.");
      return;
    }

    const employeeData = {
      id: this.employeeId,
      name: this.name,
      phoneNumber: this.phoneNumber,
      supervisors: this.supervisors
    };

    // make an HTTP PUT request to update the employee
    this.authService.put(`employee/update/${this.employeeId}`, employeeData).subscribe(
      (response) => {
        console.log("Employee updated successfully", response);
        this.success = "Employee successfully updated";
        this.error = null;
      },
      (error) => {
        console.error("Error updating employee", error);
        this.success = null;
        this.error = "Error updating employee. Please try again.";
      }
    );
  }
}
