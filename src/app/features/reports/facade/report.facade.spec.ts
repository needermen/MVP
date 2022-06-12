import {createServiceFactory, SpectatorService} from '@ngneat/spectator';
import {ReportFacade} from "./report.facade";

describe('ReportsFacade', () => {
  let spectator: SpectatorService<ReportFacade>;
  const createService = createServiceFactory(ReportFacade);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
