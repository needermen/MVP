import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Payment, ReportItem, Reports} from "../../entity/payment";

@Component({
  selector: 'app-report-item-presentation',
  templateUrl: './report-item-presentation.component.html',
  styleUrls: ['./report-item-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportItemPresentationComponent implements OnInit {
  @Input() showPayments = false;
  @Input() showHeadline = true;
  @Input() showGatewayColumn = true;

  @Input() reportSummary: ReportItem;

  constructor() { }

  ngOnInit(): void {
  }

}
