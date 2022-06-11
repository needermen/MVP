import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {InputBaseComponent} from "../input-base.component";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent extends InputBaseComponent<Date>{
}
