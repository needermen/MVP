import {ChangeDetectionStrategy, Component} from '@angular/core';

import {LayoutFacade} from "../facade/layout.facade";
import {UserFacade} from "../../domain";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  user$ = this.userFacade.user$;

  constructor(private readonly userFacade: UserFacade,
              private readonly layoutFacade: LayoutFacade) {
  }

  toggleSidebar() {
    this.layoutFacade.toggleSidebar()
  }
}
