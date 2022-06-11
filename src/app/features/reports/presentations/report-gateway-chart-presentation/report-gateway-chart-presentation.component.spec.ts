import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { ReportGatewayChartPresentationComponent } from './report-gateway-chart-presentation.component';

describe('ReportGatewayChartPresentationComponent', () => {
  let spectator: Spectator<ReportGatewayChartPresentationComponent>;
  const createComponent = createComponentFactory(ReportGatewayChartPresentationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
