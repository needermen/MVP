import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReportFilter} from "../entity/report-filter";
import {Report} from "../entity/report";
import {environment} from "../../../../environments/environment";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private readonly http: HttpClient) {
  }

  get(filter: ReportFilter): Observable<Report[]> {
    return this.http.post<{ data: Report[] }>(`${environment.api}/report`, filter)
      .pipe(map(res => res.data), tap(console.log))
  }
}
