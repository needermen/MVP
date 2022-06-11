import {Injectable} from '@angular/core';
import {ReportsService} from "../infrastructure/reports.service";
import {distinctUntilChanged, map, shareReplay, Subject, switchMap} from "rxjs";
import {ReportFilter} from "../entity/report-filter";

@Injectable({
  providedIn: 'root'
})
export class ReportsFacade {
  private readonly $filter = new Subject<ReportFilter>();
  readonly reports$ = this.$filter.pipe(switchMap(filter => this.reportsService.get(filter)), shareReplay(1))

  constructor(private readonly reportsService: ReportsService) {
  }

  generateReport(filter: ReportFilter) {
    this.$filter.next(filter);
  }
}
