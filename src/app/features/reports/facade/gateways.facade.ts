import {Injectable} from '@angular/core';
import {GatewaysService} from "../infrastructure/gateways.service";
import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GatewaysFacade {
  gateways$ = this.gatewaysService.getALl()
    .pipe(
      shareReplay(1)
    )

  constructor(private readonly gatewaysService: GatewaysService) {
  }
}
