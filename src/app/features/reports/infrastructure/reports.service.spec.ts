import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {ReportsService} from "./reports.service";

describe('ReportsService', () => {
  let spectator: SpectatorService<ReportsService>;
  const createService = createServiceFactory(ReportsService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
