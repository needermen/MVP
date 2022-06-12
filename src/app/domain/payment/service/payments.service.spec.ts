import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {PaymentsService} from "./payments.service";

describe('ReportsService', () => {
  let spectator: SpectatorService<PaymentsService>;
  const createService = createServiceFactory(PaymentsService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
