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
  defaultEmail = 'xyz@gmail.com';
  defaultPassword = '123456';

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
    const enteredEmail = this.loginForm.get('email').value;
    const enteredPassword = this.loginForm.get('password').value;

    if (enteredEmail === this.defaultEmail && enteredPassword === this.defaultPassword) {
      console.log('Logged in successfully');
      this.router.navigate(['/home/dashboard']); 
    } else {
      alert('Invalid credentials')
    }
  }

  
}
