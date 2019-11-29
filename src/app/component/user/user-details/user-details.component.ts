import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$: any;

  constructor(private route: ActivatedRoute, private service: UserService) { }

  ngOnInit() {
    this.user$= this.route.paramMap.pipe(() =>
      window.history.state
    );
    console.log(JSON.stringify(this.user$));
  }

  /*getUser(data: any) {
    this.service.getUser(data.id).subscribe(res =>
      this.user$ = res
    )
  }*/

}
