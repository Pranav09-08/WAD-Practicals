import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user: any = {};

  ngOnInit(){
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
