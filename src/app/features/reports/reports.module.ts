import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NgChartsModule} from "ng2-charts";

import {ReportsRoutingModule} from './reports-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {containers} from "./containers";
import {presentations} from "./presentations";
import { ReportsNoFilterSelectedComponent } from './presentations/reports-no-filter-selected/reports-no-filter-selected.component';


@NgModule({
  declarations: [
    ...containers,
    ...presentations,
    ReportsNoFilterSelectedComponent
  ],
  imports: [
    NgChartsModule,
    ReportsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ReportsModule {
}
