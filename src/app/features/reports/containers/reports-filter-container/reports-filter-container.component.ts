import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../infrastructure/projects.service";
import {GatewaysService} from "../../infrastructure/gateways.service";

@Component({
  selector: 'app-reports-filter-container',
  templateUrl: './reports-filter-container.component.html',
  styleUrls: ['./reports-filter-container.component.scss']
})
export class ReportsFilterContainerComponent implements OnInit {
  projects = this.projectsService.getALl();
  gateways = this.gatewaysService.getALl();

  constructor(private readonly projectsService: ProjectsService,
              private readonly gatewaysService: GatewaysService) {
  }

  ngOnInit(): void {
  }

}
