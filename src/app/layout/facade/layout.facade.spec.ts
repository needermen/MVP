import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {LayoutFacade} from './layout.facade';

describe('LayoutFacadeService', () => {
  let spectator: SpectatorService<LayoutFacade>;
  const createService = createServiceFactory(LayoutFacade);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
