import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {ProjectsFacade} from "./projects.facade";

describe('Projects.FacadeService', () => {
  let spectator: SpectatorService<ProjectsFacade>;
  const createService = createServiceFactory(ProjectsFacade);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
