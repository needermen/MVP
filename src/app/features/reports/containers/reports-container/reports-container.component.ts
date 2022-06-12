import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ReportsFacade} from "../../facade/reports.facade";

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports-container.component.html',
  styleUrls: ['./reports-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsContainerComponent {
  reports$ = this.reportsFacade.reports$;

  constructor(private readonly reportsFacade: ReportsFacade) {
  }
}
