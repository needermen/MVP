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

  get(filter: PaymentFilter): Observable<Payment[]> {
    return of(payments)
  }
}
