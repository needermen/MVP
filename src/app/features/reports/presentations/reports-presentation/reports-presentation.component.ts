import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Reports} from "../../entity/payment";

@Component({
  selector: 'app-reports-presentation',
  templateUrl: './reports-presentation.component.html',
  styleUrls: ['./reports-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsPresentationComponent {
  @Input() reports: Reports;
}

