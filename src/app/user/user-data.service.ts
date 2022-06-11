import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {from, Observable, switchMap, take} from "rxjs";
import {User} from "./user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private readonly http: HttpClient) {
  }

  getFirst(): Observable<User> {
    return this.http.get<{ data: User[] }>(`${environment.api}/users`)
      .pipe(
        switchMap(res => from(res.data)),
        take(1)
      )
  }
}
