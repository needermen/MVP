import {Injectable} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LayoutFacade {
  private readonly $sidebarVisible = new BehaviorSubject<boolean>(true);
  sidebarVisible$ = this.$sidebarVisible.asObservable().pipe(distinctUntilChanged())

  toggleSidebar() {
    this.$sidebarVisible.next(!this.$sidebarVisible.value)
  }
}
