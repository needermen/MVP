import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {ReportsFacade} from "./reports.facade";

describe('ReportsFacade', () => {
  let spectator: SpectatorService<ReportsFacade>;
  const createService = createServiceFactory(ReportsFacade);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
