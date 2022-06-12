import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LayoutFacade} from "../facade/layout.facade";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  sidebarState$ = this.layoutFacade.sidebarVisible$

  constructor(private readonly layoutFacade: LayoutFacade) {
  }
}
