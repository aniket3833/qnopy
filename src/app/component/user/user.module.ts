import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { SortByPipe } from 'src/app/pipes/sort-by.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';

import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatRippleModule,
  MatDividerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [
    UserDetailsComponent,
    ListUserComponent,
    AddUserComponent,
    SortByPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
