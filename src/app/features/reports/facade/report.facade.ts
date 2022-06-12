import {Injectable} from '@angular/core';
import {BehaviorSubject, filter, map, Observable, switchMap, withLatestFrom} from "rxjs";

import {PaymentFilter, Report, ReportItem} from "../entity";
import {Gateway, GatewaysFacade, Payment, PaymentFacade, Project, ProjectsFacade} from "../../../domain";

@Injectable({
  providedIn: 'root'
})
export class ReportFacade {
  private readonly $filter = new BehaviorSubject<PaymentFilter>(null);
  readonly filter$ = this.$filter.asObservable();
  readonly reports$ = this.$filter.pipe(filter(f => !!f),
    switchMap(filter => this.getReports(filter)))

  constructor(private readonly paymentFacade: PaymentFacade,
              private readonly projectsFacade: ProjectsFacade,
              private readonly gatewaysFacade: GatewaysFacade) {
  }

  generateReport(filter: PaymentFilter) {
    this.$filter.next(filter);
  }

  getReports(filter: PaymentFilter): Observable<Report> {
    return this.paymentFacade.get(filter)
      .pipe(
        withLatestFrom(this.gatewaysFacade.get(), this.projectsFacade.get()),
        map(([payments, gateways, projects]) => {
          const report = this.buildReportBaseDetails(filter, projects, gateways, payments);
          if (payments?.length > 0) {
            payments.forEach(payment => {
              payment.project = projects.filter(p => p.projectId == payment.projectId)[0]?.name
              payment.gateway = gateways.filter(g => g.gatewayId == payment.gatewayId)[0]?.name
            });

            if (filter.projectId && filter.gatewayId) {
              // group by both
              const reportItem = {
                title: filter.projectId + ' ' + filter.gatewayId,
                total: this.calculateSum(payments),
                payments: payments
              } as ReportItem
              report.items.push(reportItem);
            } else if (filter.projectId) {
              // group by gateway
              report.items = this.getReportGroupedByGateways(gateways, payments);
            } else {
              // group by project
              report.items = this.getReportGroupedByProjects(projects, payments);
            }
          }

          return report;
        })
      )
  }

  private buildReportBaseDetails(filter: PaymentFilter, projects: Project[], gateways: Gateway[], payments: Payment[]): Report {
    const selectedProjectName =
      filter.projectId ? projects.filter(p => p.projectId == filter.projectId)[0]?.name : 'All projects'
    const selectedGatewayName =
      filter.gatewayId ? gateways.filter(p => p.gatewayId == filter.gatewayId)[0]?.name : 'All gateways'

    return {
      title: selectedProjectName + ' | ' + selectedGatewayName,
      total: this.calculateSum(payments),
      items: [],
      showGatewayColumn: !(!!filter.projectId || !!filter.gatewayId),
      showHeadline: !(filter.projectId && filter.gatewayId),
      showChart: !(filter.projectId && filter.gatewayId) && !!(filter.projectId || filter.gatewayId),
      chartTitle: filter.projectId ? 'Gateway' : 'Project'
    };
  }

  private calculateSum(report: Payment[]) {
    return report.reduce((partialSum, a) => partialSum + a.amount, 0);
  }

  private getReportGroupedByGateways(gateways: Gateway[], payments: Payment[]): ReportItem[] {
    const reportItems: ReportItem[] = [];
    gateways.forEach(g => {
      const filteredPayments = payments.filter(r => r.gatewayId === g.gatewayId);
      if (filteredPayments.length) {
        reportItems.push({
          title: g.name,
          total: this.calculateSum(filteredPayments),
          payments: filteredPayments
        })
      }
    })

    return reportItems;
  }

  private getReportGroupedByProjects(projects: Project[], payments: Payment[]): ReportItem[] {
    const reportItems: ReportItem[] = [];
    projects.forEach(p => {
      const filteredPayments = payments.filter(r => r.projectId === p.projectId);
      if (filteredPayments.length) {
        reportItems.push({
          title: p.name,
          total: this.calculateSum(filteredPayments),
          payments: filteredPayments
        })
      }
    })

    return reportItems;
  }
}
