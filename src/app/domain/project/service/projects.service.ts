import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";

import {Project} from "../entity";
import { projects } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private readonly http: HttpClient) {
  }

  getALl(): Observable<Project[]> {
    return of(projects);
  }
}
