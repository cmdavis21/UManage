import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Employee } from '../employee';
import { AuthenticationService } from '../../auth-service/auth-service.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.scss']
})
export class SearchEmployeeComponent {
  error: string | null = null; // error message for failed fetching of employee list
  searchQuery: string = ''; // property to store the search query
  foundEmployees: any[] | null = null; // list of employees found from a search query
  employees: Employee[] = []; // array to store the search results

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

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
