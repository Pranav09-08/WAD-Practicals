import { Component } from '@angular/core';
import { FormsModule, FormSubmittedEvent } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  user = {name: '', email: '', password: ''};

  constructor(private router: Router){}

  register()
  {
    localStorage.setItem('user',JSON.stringify(this.user));
    alert("Registered");
    this.router.navigate(['/login']);
  }
}
