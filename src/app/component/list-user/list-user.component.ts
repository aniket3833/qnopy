import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  user$: any;
  error: any;
  order = 'name';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getAllUsers()
    .subscribe(res => {
      this.user$ = res;
    }, error => {
      this.error = error.message;
    });
  }

  getUserDetails(user) {
    this.userService.getUser(user.id).subscribe(res => {
      console.log('User: '+ res);
      this.router.navigateByUrl('/details/' + user.id, {state: {name: user.name, id: user.id, email: user.email}});
    });
  }
}
