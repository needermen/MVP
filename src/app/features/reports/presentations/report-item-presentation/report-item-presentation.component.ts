import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Report} from "../../entity/report";

@Component({
  selector: 'app-report-item-presentation',
  templateUrl: './report-item-presentation.component.html',
  styleUrls: ['./report-item-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportItemPresentationComponent implements OnInit {
  showPayments = false;

  @Input() reports: Report[]

  constructor() { }

  ngOnInit(): void {
  }

}
