import {Injectable} from '@angular/core';
import {ReportsService} from "../infrastructure/reports.service";
import {map, Observable, Subject, switchMap, withLatestFrom} from "rxjs";
import {ReportFilter} from "../entity/report-filter";
import {Payment, ReportItem, Reports} from "../entity/payment";
import {ProjectsFacade} from "./projects.facade";
import {GatewaysFacade} from "./gateways.facade";

@Injectable({
  providedIn: 'root'
})
export class ReportsFacade {
  private readonly $filter = new Subject<ReportFilter>();
  readonly filter$ = this.$filter.asObservable();
  readonly reports$ = this.$filter.pipe(switchMap(filter => this.getReports(filter)))

  constructor(private readonly reportsService: ReportsService,
              private readonly projectsFacade: ProjectsFacade,
              private readonly gatewaysFacade: GatewaysFacade) {
  }

  generateReport(filter: ReportFilter) {
    this.$filter.next(filter);
  }

  getReports(filter: ReportFilter): Observable<Reports> {
    return this.reportsService.get(filter)
      .pipe(
        withLatestFrom(this.gatewaysFacade.gateways$, this.projectsFacade.projects$),
        map(([reports, gateways, projects]) => {
          reports.forEach(report => {
            report.project = projects.filter(p => p.projectId == report.projectId)[0]?.name
            report.gateway = gateways.filter(g => g.gatewayId == report.gatewayId)[0]?.name
          });

          const selectedProjectName =
            filter.projectId ? projects.filter(p => p.projectId == filter.projectId)[0]?.name : 'All projects'
          const selectedGatewayName =
            filter.gatewayId ? gateways.filter(p => p.gatewayId == filter.gatewayId)[0]?.name : 'All gateways'

          let finalReport: Reports = {
            title: selectedProjectName + ' | ' + selectedGatewayName,
            total: this.calculateSum(reports),
            reports: [],
            showGatewayColumn: !(!!filter.projectId || !!filter.gatewayId)
          };

          if (filter.projectId && filter.gatewayId) {
            // group by both
            const reportItem = {
              title: filter.projectId + ' ' + filter.gatewayId,
              total: this.calculateSum(reports),
              payments: reports
            } as ReportItem

            finalReport.reports.push(reportItem);

          } else if (filter.projectId) {
            // group by gateway
            gateways.forEach(g => {
              const payments = reports.filter(r => r.gatewayId === g.gatewayId);
              if (payments.length) {
                finalReport.reports.push({
                  title: g.name,
                  total: this.calculateSum(payments),
                  payments: payments
                })
              }
            })
          } else {
            // group by project
            projects.forEach(p => {
              const payments = reports.filter(r => r.projectId === p.projectId);
              if (payments.length) {
                finalReport.reports.push({
                  title: p.name,
                  total: this.calculateSum(payments),
                  payments: payments
                })
              }
            })
          }

          return finalReport;
        })
      )
  }

  calculateSum(report: Payment[]) {
    return report.reduce((partialSum, a) => partialSum + a.amount, 0);
  }
}
