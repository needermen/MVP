import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {UserFacade} from './user.facade';

describe('UserService', () => {
  let spectator: SpectatorService<UserFacade>;
  const createService = createServiceFactory(UserFacade);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
