import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReportsEmptyPresentationComponent } from './reports-empty-presentation.component';

describe('ReportsEmptyPresentationComponent', () => {
  let spectator: Spectator<ReportsEmptyPresentationComponent>;
  const createComponent = createComponentFactory(ReportsEmptyPresentationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
