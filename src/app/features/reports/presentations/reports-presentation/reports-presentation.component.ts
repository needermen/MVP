import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reports-presentation',
  templateUrl: './reports-presentation.component.html',
  styleUrls: ['./reports-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
