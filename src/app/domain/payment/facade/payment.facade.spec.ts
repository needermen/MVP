import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {PaymentFacade} from './payment.facade';

describe('PaymentFacadeService', () => {
  let spectator: SpectatorService<PaymentFacade>;
  const createService = createServiceFactory(PaymentFacade);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
