import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

import {Gateway, Project} from "../../../../domain";
import {SelectItem} from "../../../../shared";
import {PaymentFilter} from "../../entity";

@Component({
  selector: 'app-reports-filter-presentation',
  templateUrl: './reports-filter-presentation.component.html',
  styleUrls: ['./reports-filter-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsFilterPresentationComponent {
  form: FormGroup;
  projectItems: SelectItem[];
  gatewayItems: SelectItem[];

  @Output() generateReport = new EventEmitter<PaymentFilter>();

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      projectId: [''],
      gatewayId: [''],
      from: [''],
      to: ['']
    })

  }

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

  generate() {
    this.generateReport.emit(this.form.value)
  }
}
