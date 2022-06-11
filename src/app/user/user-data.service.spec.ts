import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { UserDataService } from './user-data.service';

describe('UserService', () => {
  let spectator: SpectatorService<UserDataService>;
  const createService = createServiceFactory(UserDataService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
