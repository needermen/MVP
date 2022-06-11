import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReportItemPresentationComponent } from './report-item-presentation.component';

describe('ReportItemPresentationComponent', () => {
  let spectator: Spectator<ReportItemPresentationComponent>;
  const createComponent = createComponentFactory(ReportItemPresentationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
