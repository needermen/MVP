import {Injectable} from '@angular/core';
import {ProjectsService} from "../service/projects.service";
import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectsFacade {
  private readonly projects$ = this.projectService.getALl()
    .pipe(
      shareReplay(1)
    )

  constructor(private readonly projectService: ProjectsService) {
  }

  get() {
    return this.projects$
  }
}
