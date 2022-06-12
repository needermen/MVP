import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ReportFacade} from "../../facade";
import {combineLatest, map, startWith} from "rxjs";

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports-container.component.html',
  styleUrls: ['./reports-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsContainerComponent {
  reports$ = this.reportsFacade.reports$;
  filter$ = this.reportsFacade.filter$;

  view = combineLatest([this.reports$.pipe(startWith(null)), this.filter$])
    .pipe(
      map(([reports, filter]) => {
        return {
          reports,
          filter
        }
      })
    )

  constructor(private readonly reportsFacade: ReportFacade) {
  }
}
