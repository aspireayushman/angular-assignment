import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup; 

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  } 

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      // Redirect to dashboard if form is valid
      this.router.navigate(['/home/dashboard']); 
      console.log('Form submitted successfully');
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }
}
