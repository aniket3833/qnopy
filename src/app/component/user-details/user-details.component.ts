import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user$: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user$ = this.route.paramMap.pipe(() =>
      window.history.state
    );
    console.log(JSON.stringify(this.user$));
  }

}
