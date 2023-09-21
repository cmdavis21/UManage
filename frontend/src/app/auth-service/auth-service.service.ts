import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  private backendUrl = 'http://localhost:8080/api/v1';
  private apiKey = 'Sp4MdhkAuSCYoQdCWXSet5ssrwCXK1VarT5qM2cl1fPgkWSPqMP5kLFUa5jUAahZcunW1M1Eme8AfGTyMlrT6g==';
  success: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  private getCorsHeaders(): HttpHeaders {
    return new HttpHeaders({
      'X-API-Key': this.apiKey,
    });
  }

  // this method is for the login form authentication
  async onLogin(username: string, password: string): Promise<void> {
    const headers = this.getCorsHeaders();

    try {
      // send a POST request to backend's authentication endpoint
      const response = await this.http.post<any>(`${this.backendUrl}/auth/login`, {}, { headers }).toPromise();

      // check the response from the backend
      if (response && response.status === 'success') {
        console.log('Login successful', response);
        this.success = 'Login successful. You will be routed shortly.';
        // redirect to the employee page after successful login
        this.router.navigate(['/employee']);
      } else {
        console.error('Authentication failed', response);
      }
    } catch (error) {
      console.error('Error signing in', error);
    }
  }

  // send a GET request with the API key
  get(endpoint: string): Observable<any> {
    const headers = this.getCorsHeaders();
    return this.http.get<any>(`${this.backendUrl}/${endpoint}`, { headers });
  }

  // send a POST request with the API key
  post(endpoint: string, data: any): Observable<any> {
    const headers = this.getCorsHeaders();
    return this.http.post(`${this.backendUrl}/${endpoint}`, data, { headers });
  }

  // send a PUT request with the API key
  put(endpoint: string, data: any) {
    const headers = this.getCorsHeaders();
    return this.http.put(`${this.backendUrl}/${endpoint}`, data, { headers });
  }

  // send a DELETE request with the API key
  delete(endpoint: string) {
    const headers = this.getCorsHeaders();
    return this.http.delete(`${this.backendUrl}/${endpoint}`, { headers });
  }
}
