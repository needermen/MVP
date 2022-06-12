import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ChartData, ChartOptions} from "chart.js";
import {ReportItem} from "../../entity";

@Component({
  selector: 'app-report-gateway-chart-presentation',
  templateUrl: './report-chart-presentation.component.html',
  styleUrls: ['./report-chart-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportChartPresentationComponent {
  reports: ReportItem[];
  colors = ['#A259FF', '#F24E1E', '#FFC107', '#6497B1']
  doughnutChartData: ChartData<'doughnut'>;
  pieChartOptions: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: false,
      },
    }
  };

  @Input() total: number;
  @Input() title: string;

  @Input() set report(items: ReportItem[]) {
    this.reports = items;
    this.doughnutChartData = {
      labels: items.map(i => i.title),
      datasets: [
        {
          data: items.map(r => r.total), backgroundColor: this.colors
        }
      ]
    }
  }

}
