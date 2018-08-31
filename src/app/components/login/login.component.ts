import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateManager } from '../../classes/error-state-manager';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authUser: object = {
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: ''
  };

  matcher = new ErrorStateManager();

  constructor(private userService: UserService) { }
  login() {
    this.userService.login(this.authUser);
  }



  ngOnInit() {
  }

}
