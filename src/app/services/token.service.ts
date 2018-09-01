import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenLength = 12;

  tokenArray = ['a', 'b', 'c', 'd',
      'e', 'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o', 'p',
      'q', 'r', 's', 't', 'u', 'v',
      'w', 'x', 'y', 'z', 'A', 'B',
      'C', 'D', 'E', 'F', 'G', 'H',
      'I', 'J', 'K', 'L', 'M', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S',
      'T', 'U', 'V', 'W', 'X', 'Y',
      'Z', '1', '2', '3', '4', '5',
      '6', '7', '8', '9', '0', '@',
      '$', '!', '#', '%', '&'];

  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService, private router: Router) { }

  generateToken(both) {
    let rndString = '';
    for (let i = 0; i < this.tokenLength; i++) {
      const rndNumber = Math.ceil( Math.random() * this.tokenArray.length)  - 1;
      rndString = rndString + this.tokenArray[rndNumber];
    }

    this.setToken(rndString, both);
  }

  setToken(token, both) {
  if (both) {
    this.sessionStorage.set('token', token);
    this.localStorage.set('token', token);
  } else {
    this.sessionStorage.set('token', token);
  }
}

  checkToken(redirect) {
    const localToken = this.localStorage.get('token');
    const sessionToken = this.sessionStorage.get('token');
    // if (localToken === sessionToken) {
    //   console.log(`Local Storage Token: ${localToken}`);
    //   console.log(`Session Storage Token: ${sessionToken}`);
    //   alert('Tokens Match');
    if (localToken !== sessionToken) {
      console.log('You do not have the same token');
      alert('Tokens NO GO');
      this.router.navigateByUrl(redirect);
  } else {
    alert('Tokens Match');
  }
}
}
