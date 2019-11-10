import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { User } from '../component/model/user';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllUsers() {
     return this.httpClient.get(this.baseUrl + '/post.json').pipe(
        map( response => {
        const userArray = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            userArray.push( {...response[key], id: key});
          }
        }
        return userArray;
        }), catchError (handleError => {
          return throwError(handleError);
        })
      );
  }

  getUser(id: string) {
    return this.httpClient.get(this.baseUrl + '/post.json',
      {
        params: new HttpParams().set('id', id)
      }
    );
  }

  addUser(user: any) {
    return this.httpClient.post(this.baseUrl + '/post.json', user);
  }

}
