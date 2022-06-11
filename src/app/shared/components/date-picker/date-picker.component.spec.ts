import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { DatePickerComponent } from './date-picker.component';

describe('DatePickerComponent', () => {
  let spectator: Spectator<DatePickerComponent>;
  const createComponent = createComponentFactory(DatePickerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
