import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reports-filter-presentation',
  templateUrl: './reports-filter-presentation.component.html',
  styleUrls: ['./reports-filter-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsFilterPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
