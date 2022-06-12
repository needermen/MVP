import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {ReportItem} from "../../entity";

@Component({
  selector: 'app-report-item-presentation',
  templateUrl: './report-item-presentation.component.html',
  styleUrls: ['./report-item-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportItemPresentationComponent {
  @Input() showPayments = false;
  @Input() showHeadline = true;
  @Input() showGatewayColumn = true;
  @Input() reportItem: ReportItem;

  @Output() showPaymentsCommand = new EventEmitter();

  toggleShowPayments() {
    this.showPayments = !this.showPayments;
    this.showPaymentsCommand.emit();
  }
}
