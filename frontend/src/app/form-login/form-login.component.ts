import { Component } from '@angular/core';
import { AuthenticationService } from '../auth-service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  username: string = '';
  password: string = '';
  success: string | null = null; // message for successful login
  error: string | null = null; // error message for failed login

  constructor(private authService: AuthenticationService, private router: Router) {}

  async onLogin(): Promise<void> {
    try {
      await this.authService.onLogin(this.username, this.password);
      this.router.navigate(['/api/v1/employee']);
    } catch (error) {
      // handle failed login
      this.success = null;
      this.error = 'Authentication failed. Please try again.';
    }
  }
}
