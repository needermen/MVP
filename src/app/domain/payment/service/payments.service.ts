import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Payment, PaymentFilter} from "../entity";
import {environment} from "../../../../environments/environment";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private readonly http: HttpClient) {
  }

  get(filter: PaymentFilter): Observable<Payment[]> {
    return this.http.post<{ data: Payment[] }>(`${environment.api}/report`, filter)
      .pipe(map(res => res.data))
  }
}
