import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectItem} from "../../entity/select-item";

@Component({
  selector: 'app-shared-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() data: SelectItem[] | undefined
  @Input() label: string | undefined;

  @Output() selected = new EventEmitter<string>();
}
