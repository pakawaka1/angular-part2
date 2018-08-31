import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { SessionStorageService } from '../../services/session-storage.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];

  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService,
    private token: TokenService, private userService: UserService) { }

  getAllUsers() {
    this.userService.getAllUsers().subscribe((res: any) => {
      console.log(res);
      this.users = res;
    });
  }
  ngOnInit() {
    // this.getAllUsers();
    this.token.checkToken('/register');
  }

}
