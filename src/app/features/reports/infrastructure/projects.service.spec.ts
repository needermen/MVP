import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let spectator: SpectatorService<ProjectsService>;
  const createService = createServiceFactory(ProjectsService);

  beforeEach(() => spectator = createService());

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});