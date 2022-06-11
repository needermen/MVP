import {createComponentFactory, Spectator} from "@ngneat/spectator";
import {ReportsPresentationComponent} from "./reports-presentation.component";

describe('ReportsPresentationComponent', () => {
  let spectator: Spectator<ReportsPresentationComponent>;
  const createComponent = createComponentFactory(ReportsPresentationComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
