import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UserDataService} from "../../user/user-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  user$ = this.userDataService.getFirst();

  constructor(private readonly userDataService: UserDataService) { }

  ngOnInit(): void {
  }

}
