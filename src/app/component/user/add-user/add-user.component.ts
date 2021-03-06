import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  user: any;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.userForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$")])
    });
  }

  addUser() {
    if (this.userForm.valid) {
      this.user = this.userForm.value;
      console.log('Added new User: ' + this.user);
      this.userService.addUser(this.user).subscribe( res => {
        console.log(res);
      });
    }
  }
}
