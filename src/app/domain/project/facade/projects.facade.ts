import {Injectable} from '@angular/core';
import {ProjectsService} from "../service/projects.service";
import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsFacade {
  projects$ = this.projectService.getALl()
    .pipe(
      shareReplay(1)
    )

  constructor(private readonly projectService: ProjectsService) {
  }
}
