import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ReportFacade} from "../../facade";
import {PaymentFilter} from "../../entity";
import {GatewaysFacade, ProjectsFacade} from "../../../../domain";

@Component({
  selector: 'app-reports-filter-container',
  templateUrl: './reports-filter-container.component.html',
  styleUrls: ['./reports-filter-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsFilterContainerComponent {
  projects = this.projectsFacade.get();
  gateways = this.gatewaysFacade.get();

  constructor(private readonly projectsFacade: ProjectsFacade,
              private readonly gatewaysFacade: GatewaysFacade,
              private readonly reportsFacade: ReportFacade) {
  }

  generateReport(filter: PaymentFilter) {
    this.reportsFacade.generateReport(filter)
  }

}

