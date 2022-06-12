import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {Project} from "../entity";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private readonly http: HttpClient) {
  }

  getALl(): Observable<Project[]> {
    return this.http.get<{ data: Project[] }>(`${environment.api}/projects`)
      .pipe(
        map(res => res.data)
      )
  }
}
