import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Gateway} from "../entity/gateway";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GatewaysService {

  constructor(private readonly http: HttpClient) {
  }

  getALl(): Observable<Gateway[]> {
    return this.http.get<{ data: Gateway[] }>(`${environment.api}/gateways`)
      .pipe(
        map(res => res.data)
      )
  }
}
