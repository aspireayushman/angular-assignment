import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  emailControl = new FormControl('');
  passwordControl = new FormControl('');
  hide = true;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  } 

  togglePasswordVisibility(event: Event): void {
    event.preventDefault();
    this.hide = !this.hide;
  }
  

  loginForm: FormGroup;


  onSubmit() {
    if (this.loginForm.valid) {
      this.router.navigate(['/home/dashboard']); 
      console.log('Form submitted successfully');
    } else {
      // Handle invalid form
      console.log('Form is invalid');
    }
  }
}
