import {Injectable} from '@angular/core';
import {User, UserService} from "../../user";
import {Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  user$: Observable<User> = this.userService.getFirst()
    .pipe(
      shareReplay(1)
    )

  constructor(private readonly userService: UserService) {
  }
}
