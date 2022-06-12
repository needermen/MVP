import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ReportItem} from "../../entity/payment";
import {ChartConfiguration, ChartData} from "chart.js";

@Component({
  selector: 'app-report-gateway-chart-presentation',
  templateUrl: './report-gateway-chart-presentation.component.html',
  styleUrls: ['./report-gateway-chart-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportGatewayChartPresentationComponent {
  reports: ReportItem[];
  colors = ['#A259FF', '#F24E1E', '#FFC107', '#6497B1']

  @Input() total: number;
  @Input() title: string;

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {data: [350, 450, 100]},
    ]
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: false,
      }
    }
  };

  @Input() set report(items: ReportItem[]) {
    this.reports = items;
    this.doughnutChartLabels = items.map(r => r.title);
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: items.map(r => r.total), backgroundColor: this.colors
        }
      ]
    }
  }

}
