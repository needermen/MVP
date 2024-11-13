import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable, switchMap, take, catchError, of} from "rxjs";
import {User} from "../entity/user";
import {environment} from "../../../../environments/environment";
import { users } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) {
  }

  getFirst(): Observable<User> {
    return of(users[0]);
  }
}
