import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private app = 'mean.';

  constructor() { }
  set(key, data) {
    return localStorage.setItem(`${this.app}${key}`, JSON.stringify(data));
  }
  get(key) {
    console.log('thisworks');
    return JSON.parse(localStorage.getItem(`${this.app}${key}`));
  }
  remove(key) {
    return localStorage.removeItem(`${this.app}${key}`);
  }
}
