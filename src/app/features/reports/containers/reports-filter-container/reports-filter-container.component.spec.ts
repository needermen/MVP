import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReportsFilterContainerComponent } from './reports-filter-container.component';

describe('ReportsFilterContainerComponent', () => {
  let spectator: Spectator<ReportsFilterContainerComponent>;
  const createComponent = createComponentFactory(ReportsFilterContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
