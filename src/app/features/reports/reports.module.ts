import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsContainerComponent } from './containers/reports-container/reports-container.component';
import { ReportsPresentationComponent } from './presentations/reports-presentation/reports-presentation.component';
import { ReportsTitlePresentationComponent } from './presentations/reports-title-presentation/reports-title-presentation.component';
import { ReportsFilterPresentationComponent } from './presentations/reports-filter-presentation/reports-filter-presentation.component';
import { ReportsEmptyPresentationComponent } from './presentations/reports-empty-presentation/reports-empty-presentation.component';
import { ReportItemPresentationComponent } from './presentations/report-item-presentation/report-item-presentation.component';
import { ReportGatewayChartPresentationComponent } from './presentations/report-gateway-chart-presentation/report-gateway-chart-presentation.component';
import {SharedModule} from "../../shared/shared.module";
import { ReportsFilterContainerComponent } from './containers/reports-filter-container/reports-filter-container.component';


@NgModule({
  declarations: [
    ReportsContainerComponent,
    ReportsPresentationComponent,
    ReportsTitlePresentationComponent,
    ReportsFilterPresentationComponent,
    ReportsEmptyPresentationComponent,
    ReportItemPresentationComponent,
    ReportGatewayChartPresentationComponent,
    ReportsFilterContainerComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
