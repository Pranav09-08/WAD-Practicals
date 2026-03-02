import { Injectable } from '@angular/core';   // ✅ THIS LINE WAS MISSING

@Injectable({
  providedIn: 'root'
})
export class UserService {

  register(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  login(username: string, password: string): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user && user.username === username && user.password === password) {
      return true;
    }
    return false;
  }

  getProfile() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }
}