import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reports-title-presentation',
  templateUrl: './reports-title-presentation.component.html',
  styleUrls: ['./reports-title-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsTitlePresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
