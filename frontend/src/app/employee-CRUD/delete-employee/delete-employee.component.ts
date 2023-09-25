import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthenticationService } from '../../auth-service/auth-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent {

  id: number = NaN;
  success: string | null = null; // message for successful deletion of employee
  error: string | null = null; // error message for failed deletion of employee

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  deleteEmployee() {
    // make an HTTP DELETE request to remove the employee
    this.authService.delete(`employee/delete/${this.id}`).subscribe(
      (response) => {
        console.log("Employee deleted successfully", response);
        this.success = "Employee successfully deleted";
        this.error = null;

        // reset form field
        this.id = NaN;
      }, (error) => {
        console.error("Error deleting employee", error);
        this.success = null;
        this.error = "Error deleting employee. Please try again."
      }
    )
  }
}
