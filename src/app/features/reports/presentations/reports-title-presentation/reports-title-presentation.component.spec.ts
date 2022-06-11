import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReportsTitlePresentationComponent } from './reports-title-presentation.component';

describe('ReportsTitlePresentationComponent', () => {
  let spectator: Spectator<ReportsTitlePresentationComponent>;
  const createComponent = createComponentFactory(ReportsTitlePresentationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
