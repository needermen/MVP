import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Project} from "../../entity/project";
import {Gateway} from "../../entity/gateway";
import {SelectItem} from "../../../../shared/entity/select-item";

@Component({
  selector: 'app-reports-filter-presentation',
  templateUrl: './reports-filter-presentation.component.html',
  styleUrls: ['./reports-filter-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsFilterPresentationComponent implements OnInit {
  projectItems: SelectItem[];
  gatewayItems: SelectItem[]

  @Input() set projects(projects: Project[]) {
    this.projectItems = [{key: '-1', label: 'All projects'}, ...projects?.map(p => {
      return {key: p.projectId, label: p.name} as SelectItem
    }) ?? []]
  }

  @Input() set gateways(gateways: Gateway[]) {
    this.gatewayItems = [{key: '-1', label: 'All gateways'}, ...gateways?.map(g => {
      return {key: g.gatewayId, label: g.name} as SelectItem
    }) ?? []]
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
