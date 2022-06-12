import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

import {Report} from "../../entity";

@Component({
  selector: 'app-reports-presentation',
  templateUrl: './reports-presentation.component.html',
  styleUrls: ['./reports-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportsPresentationComponent implements OnChanges {
  selectedId: number = -1;

  @Input() report: Report;

  ngOnChanges(changes: SimpleChanges) {
    if (changes["report"]?.currentValue) {
      this.selectedId = -1
    }
  }
}

