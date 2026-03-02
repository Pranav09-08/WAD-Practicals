import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  login(data: any) {
    console.log('Login clicked:', data);   // DEBUG

    const success = this.userService.login(data.username, data.password);

    console.log('Login success:', success); // DEBUG

    if (success) {
      this.router.navigateByUrl('/profile');   // ✅ force navigation
    } else {
      alert('Invalid Credentials');
    }
  }
}