import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReportsNoFilterSelectedComponent } from './reports-no-filter-selected.component';

describe('ReportsNoFilterSelectedComponent', () => {
  let spectator: Spectator<ReportsNoFilterSelectedComponent>;
  const createComponent = createComponentFactory(ReportsNoFilterSelectedComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
