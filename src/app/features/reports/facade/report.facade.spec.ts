import {createServiceFactory, SpectatorService} from '@ngneat/spectator/jest';

import {ReportFacade} from "./report.facade";
import {GatewaysFacade, PaymentFacade, ProjectsFacade} from "../../../domain";

describe('ReportsFacade', () => {
  let spectator: SpectatorService<ReportFacade>;
  const createService = createServiceFactory({
    service: ReportFacade,
    mocks: [PaymentFacade, ProjectsFacade, GatewaysFacade],
  });

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
