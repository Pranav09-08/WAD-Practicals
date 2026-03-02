import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  register(data: any) {
    this.userService.register(data);
    alert('User Registered Successfully');
    this.router.navigate(['/login']);   // ✅ redirect to login
  }
}