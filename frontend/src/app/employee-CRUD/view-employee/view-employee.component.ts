import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { AuthenticationService } from 'src/app/auth-service/authentication.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeList: any[] | null = null; // list of employees
  error: string | null = null; // error message for failed fetching of employee list
  searchQuery: string = ''; // property to store the search query
  foundEmployees: any[] | null = null; // list of employees found from a search query
  employees: Employee[] = []; // array to store the search results

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  ngOnInit() {
    this.viewEmployees();
  }

  async viewEmployees() {
    try {
      // retrieve saved employees from the backend using AuthService
      const response = this.authService.get('employee/view-all');

      response.subscribe(
        (data) => {
          this.employeeList = data;
        },
        (error) => {
          console.error("Error fetching employee data", error);
          this.error = "Error fetching employee data";
        }
      );
    } catch (error) {
      console.error("Error fetching employee data", error);
      this.error = "Error fetching employee data";
    }
  }

  searchEmployees() {
    // check if the search query is not empty
    if (this.searchQuery.trim() !== '') {
      // make an HTTP GET request to search for employees by name or ID
      this.authService.get(`employee/search?query=${this.searchQuery}`)
        .subscribe(
          (response) => {
            if (Array.isArray(response)) {
              // cast the response to an array of Employee objects
              this.employees = response as Employee[];
              this.foundEmployees = response;
            } else {
              // handle the case where the response is not an array
              console.error('Invalid response format');
              this.error = "No employee found";
            }
          },
          (error) => {
            console.error('Error searching for employees', error);
            this.error = "No employee found";
          }
        );
    } else {
      // if the search query is empty, clear the employees array
      this.employees = [];
    }
  }
}
