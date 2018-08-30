import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../classes/user';
import { ApiService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService, private router: Router, private localStorage: LocalStorageService) { }
  register(user: User) {
    return this.api.post('/postUser', user).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user);
    }, err => console.log('There was an error!!'), () => this.router.navigateByUrl('/'));
  }
  login(user: any) {
    console.log(this.login);

    return this.api.post('/userLogin', user).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user);
    }, err => console.log(err), () => this.router.navigateByUrl('/'));

  }
  logout() {
    return this.localStorage.remove('currentUser');
  }
  getAllUsers() {
    return this.api.get('/getAllUsers');
  }
  getUser(_id) {
    return this.api.get(`/user/${_id}`);
  }
}
