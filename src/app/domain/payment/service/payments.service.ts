import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Payment, PaymentFilter} from "../entity";
import {environment} from "../../../../environments/environment";
import {map, of, Observable} from "rxjs";
import { payments } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private readonly http: HttpClient) {
  }

  get(filters: PaymentFilter): Observable<Payment[]> {
    return from(payments).pipe(
      filter(payment => this.applyFilters(payment, filters)),
      toArray()
    )
  }

  private applyFilters(payment: Payment, filters: PaymentFilter): boolean {
    return payment.projectId == (filters.projectId ? filters.projectId : payment.projectId)
    && payment.gatewayId == (filters.gatewayId ? filters.gatewayId : payment.gatewayId);
  }
}
