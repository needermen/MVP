import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Report} from "../../entity/report";

@Component({
  selector: 'app-reports-presentation',
  templateUrl: './reports-presentation.component.html',
  styleUrls: ['./reports-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsPresentationComponent implements OnInit {
  @Input() reports: Report[];

  constructor() { }

  ngOnInit(): void {
  }

}
