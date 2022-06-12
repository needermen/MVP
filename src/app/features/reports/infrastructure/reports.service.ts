import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ReportFilter} from "../entity/report-filter";
import {Payment} from "../entity/payment";
import {environment} from "../../../../environments/environment";
import {map, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private readonly http: HttpClient) {
  }

  get(filter: ReportFilter): Observable<Payment[]> {
    return this.http.post<{ data: Payment[] }>(`${environment.api}/report`, filter)
      .pipe(map(res => res.data))
  }
}
