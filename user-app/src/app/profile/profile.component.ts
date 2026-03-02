import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  user: any = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getProfile();
    console.log('Profile loaded user:', this.user); // DEBUG
  }
}