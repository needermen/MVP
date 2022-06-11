import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReportsFilterPresentationComponent } from './reports-filter-presentation.component';

describe('ReportsFilterPresentationComponent', () => {
  let spectator: Spectator<ReportsFilterPresentationComponent>;
  const createComponent = createComponentFactory(ReportsFilterPresentationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
