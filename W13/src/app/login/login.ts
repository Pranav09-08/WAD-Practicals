import { Component } from '@angular/core';
import { FormsModule, FormSubmittedEvent } from '@angular/forms';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginData = {email: '',password: ''};

  constructor(private router: Router){}

  login(){
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if(
      this.loginData.email === user.email &&
      this.loginData.password === user.password
    ){
      alert("Login Success");
      this.router.navigate(['/profile']);
    }else{
       alert("Invalid Credentials");
    }
  }
}
