import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "../../entity/select-item";
import {InputBaseComponent} from "../input-base.component";

@Component({
  selector: 'app-shared-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends InputBaseComponent<string>{
  @Input() data: SelectItem[];
  @Input() label: string;

  @Output() selected = new EventEmitter<string>();
}
