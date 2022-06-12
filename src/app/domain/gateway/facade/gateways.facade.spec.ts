import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {GatewaysFacade} from "./gateways.facade";

describe('Gateways.FacadeService', () => {
  let spectator: SpectatorService<GatewaysFacade>;
  const createService = createServiceFactory(GatewaysFacade);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
