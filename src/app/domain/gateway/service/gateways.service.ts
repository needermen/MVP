import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, of, Observable} from "rxjs";
import {Gateway} from "../entity/gateway";
import {environment} from "../../../../environments/environment";
import { gateways } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {

  constructor(private readonly http: HttpClient) {
  }

  getALl(): Observable<Gateway[]> {
    return of(gateways);
  }
}
