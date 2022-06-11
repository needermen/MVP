import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {ReportsContainerComponent} from "./reports-container.component";

describe('ReportsContainerComponent', () => {
  let spectator: Spectator<ReportsContainerComponent>;
  const createComponent = createComponentFactory(ReportsContainerComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
