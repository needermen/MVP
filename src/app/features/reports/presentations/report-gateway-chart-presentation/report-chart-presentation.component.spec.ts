import {createComponentFactory, Spectator} from '@ngneat/spectator';

import {ReportChartPresentationComponent} from './report-chart-presentation.component';

describe('ReportGatewayChartPresentationComponent', () => {
  let spectator: Spectator<ReportChartPresentationComponent>;
  const createComponent = createComponentFactory(ReportChartPresentationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
