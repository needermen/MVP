import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports-container.component.html',
  styleUrls: ['./reports-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
