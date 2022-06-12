import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../../entity/project";
import {Gateway} from "../../entity/gateway";
import {SelectItem} from "../../../../shared/entity/select-item";
import {ReportFilter} from "../../entity/report-filter";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reports-filter-presentation',
  templateUrl: './reports-filter-presentation.component.html',
  styleUrls: ['./reports-filter-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsFilterPresentationComponent {
  form: FormGroup;
  projectItems: SelectItem[];
  gatewayItems: SelectItem[]

  @Input() set projects(projects: Project[]) {
    this.projectItems = [{key: '', label: 'All projects'}, ...projects?.map(p => {
      return {key: p.projectId, label: p.name} as SelectItem
    }) ?? []]
  }

  @Input() set gateways(gateways: Gateway[]) {
    this.gatewayItems = [{key: '', label: 'All gateways'}, ...gateways?.map(g => {
      return {key: g.gatewayId, label: g.name} as SelectItem
    }) ?? []]
  }

  @Output() generateReport = new EventEmitter<ReportFilter>();

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      projectId: [''],
      gatewayId: [''],
      from: [''],
      to: ['']
    })
  }

  generate() {
    this.generateReport.emit(this.form.value)
  }
}
