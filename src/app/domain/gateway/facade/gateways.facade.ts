import {Injectable} from '@angular/core';
import {GatewaysService} from "../service/gateways.service";
import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GatewaysFacade {
  private readonly gateways$ = this.gatewaysService.getALl()
    .pipe(
      shareReplay(1)
    )

  constructor(private readonly gatewaysService: GatewaysService) {
  }

  get() {
    return this.gateways$
  }
}
