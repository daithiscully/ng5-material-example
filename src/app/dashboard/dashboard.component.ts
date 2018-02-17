import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(5)]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    console.log(`Logging in`);
    console.log(`Username: ${this.username.value}`);
    console.log(`Password: ${this.password.value}`);
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getUsernameErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a username' :
      this.username.hasError('maxlength') ? 'Username cannot have more than 20 characters' :
      this.username.hasError('minlength') ? 'Username cannot have less than 5 characters' :
        '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' :
        '';
  }
}
