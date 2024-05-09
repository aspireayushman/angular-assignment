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
  isAdmin: boolean; 

  users = [
    { email: 'user@gmail.com', password: 'user123', role: 'user' },
    { email: 'admin@gmail.com', password: 'admin123', role: 'admin' }
  ];

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

    const user = this.users.find(u => u.email === enteredEmail && u.password === enteredPassword);

    if (user) {
      console.log('Logged in successfully as ' + user.role);
      this.isAdmin = user.role === 'admin'; 
      if (this.isAdmin) {
        this.router.navigate(['/home/dashboard']); 
      } else {
        this.router.navigate(['/home/dashboard']); 
      }
    } else {
      alert('Invalid credentials');
    }
  } 
}
