import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProjectsService} from "../../infrastructure/projects.service";
import {GatewaysService} from "../../infrastructure/gateways.service";
import {ReportsFacade} from "../../facade/reports.facade";
import {ReportFilter} from "../../entity/report-filter";

@Component({
  selector: 'app-reports-filter-container',
  templateUrl: './reports-filter-container.component.html',
  styleUrls: ['./reports-filter-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsFilterContainerComponent {
  projects = this.projectsService.getALl();
  gateways = this.gatewaysService.getALl();

  constructor(private readonly projectsService: ProjectsService,
              private readonly gatewaysService: GatewaysService,
              private readonly reportsFacade: ReportsFacade) {
  }

  generateReport(filter: ReportFilter) {
    this.reportsFacade.generateReport(filter)
  }

}

