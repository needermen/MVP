import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reports-empty-presentation',
  templateUrl: './reports-empty-presentation.component.html',
  styleUrls: ['./reports-empty-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsEmptyPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
