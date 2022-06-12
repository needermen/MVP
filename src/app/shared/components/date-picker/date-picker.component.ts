import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {InputBaseComponent} from "../input-base.component";

@Component({
  selector: 'app-shared-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent extends InputBaseComponent<Date> {
  @Input() label: string;
}
