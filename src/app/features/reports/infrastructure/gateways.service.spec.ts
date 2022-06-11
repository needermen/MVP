import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { GatewaysService } from './gateways.service';

describe('GatewaysService', () => {
  let spectator: SpectatorService<GatewaysService>;
  const createService = createServiceFactory(GatewaysService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});