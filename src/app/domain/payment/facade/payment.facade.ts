import {Injectable} from '@angular/core';
import {PaymentsService} from "../service";
import {UserFacade} from "../../user";
import {Payment, PaymentFilter} from "../entity";
import {map, Observable, withLatestFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentFacade {
  constructor(private readonly paymentService: PaymentsService,
              private readonly userFacade: UserFacade) {
  }

  get(filter: PaymentFilter): Observable<Payment[]> {
    return this.paymentService.get(filter)
      .pipe(
        withLatestFrom(this.userFacade.user$),
        map(([payments, user]) => {
          return payments.filter(p => p.userIds.includes(user.userId))
        })
      )
  }
}
