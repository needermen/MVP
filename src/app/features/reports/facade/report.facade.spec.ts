import {createServiceFactory, SpectatorService} from '@ngneat/spectator/jest';
import {of, take, tap} from "rxjs";

import {ReportFacade} from "./report.facade";
import {GatewaysFacade, PaymentFacade, PaymentFilter, ProjectsFacade} from "../../../domain";
import {
  baseMockGatewayId,
  baseMockGateways,
  baseMockPayments,
  baseMockProjectId,
  baseMockProjects,
  mockNewestPaymentDate
} from "./mock-data";

describe('Reports Facade', () => {
  let spectator: SpectatorService<ReportFacade>;
  const createService = createServiceFactory({
    service: ReportFacade,
    mocks: [PaymentFacade, ProjectsFacade, GatewaysFacade],
  });

  beforeEach(() => {
    spectator = createService();
    spectator.inject(PaymentFacade).get.andReturn(of([baseMockPayments]))
    spectator.inject(ProjectsFacade).get.andReturn(of([baseMockProjects]))
    spectator.inject(GatewaysFacade).get.andReturn(of([baseMockGateways]))
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  describe('filtering', () => {
    it('should return report items more than 0 when using default filter', done => {
      // act
      spectator.service.generateReport({} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.items.length).toBeGreaterThan(0);
          done();
        })).subscribe();
    });

    it('should return report items more than 0 when filtering by gateway', done => {
      // act
      spectator.service.generateReport({gatewayId: baseMockGatewayId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.items.length).toBeGreaterThan(0);
          done();
        })).subscribe();
    });

    it('should return report items more than 0 when filtering by project', done => {
      // act
      spectator.service.generateReport({projectId: baseMockProjectId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.items.length).toBeGreaterThan(0);
          done();
        })).subscribe();
    });

    it('should return 1 report item when filtering by project and gateway', done => {
      // act
      spectator.service.generateReport({projectId: baseMockProjectId, gatewayId: baseMockGatewayId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.items.length).toBe(1);
          done();
        })).subscribe();
    });

    it('should return 1 report item when filtering by dates', done => {
      // act
      spectator.service.generateReport({from: mockNewestPaymentDate, to: mockNewestPaymentDate} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.items.length).toBe(1);
          done();
        })).subscribe();
    });
  })

  describe('show generate column ', () => {
    it('should hide gateway column when grouping by project', done => {
      // act
      spectator.service.generateReport({projectId: baseMockProjectId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showGatewayColumn).toBe(false);
          done();
        })).subscribe();
    });

    it('should hide gateway column when grouping by project and gateway', done => {
      // act
      spectator.service.generateReport({projectId: baseMockProjectId, gatewayId: baseMockGatewayId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showGatewayColumn).toBe(false);
          done();
        })).subscribe();
    });

    it('should hide gateway column when grouping by gateway', done => {
      // act
      spectator.service.generateReport({gatewayId: baseMockGatewayId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showGatewayColumn).toBe(false);
          done();
        })).subscribe();
    });

    it('should show gateway column when no filter is enabled', done => {
      // act
      spectator.service.generateReport({} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showGatewayColumn).toBe(true);
          done();
        })).subscribe();
    });
  })

  describe('show chart', () => {
    it('should show chart when grouping by project', done => {
      // act
      spectator.service.generateReport({projectId: baseMockProjectId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showChart).toBe(true);
          done();
        })).subscribe();
    });

    it('should hide chart when grouping by project and gateway', done => {
      // act
      spectator.service.generateReport({projectId: baseMockProjectId, gatewayId: baseMockGatewayId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showChart).toBe(false);
          done();
        })).subscribe();
    });

    it('should show chart when grouping by gateway', done => {
      // act
      spectator.service.generateReport({gatewayId: baseMockGatewayId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showChart).toBe(true);
          done();
        })).subscribe();
    });

    it('should hide chart when no filter is enabled', done => {
      // act
      spectator.service.generateReport({} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showChart).toBe(false);
          done();
        })).subscribe();
    });
  })
  
  describe('show headline', () => {
    it('should hide headline when grouping by project', done => {
      // act
      spectator.service.generateReport({projectId: baseMockProjectId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showHeadline).toBe(true);
          done();
        })).subscribe();
    });

    it('should show headline when grouping by project and gateway', done => {
      // act
      spectator.service.generateReport({projectId: baseMockProjectId, gatewayId: baseMockGatewayId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showHeadline).toBe(false);
          done();
        })).subscribe();
    });

    it('should hide headline when grouping by gateway', done => {
      // act
      spectator.service.generateReport({gatewayId: baseMockGatewayId} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showHeadline).toBe(true);
          done();
        })).subscribe();
    });

    it('should hide headline when no filter is enabled', done => {
      // act
      spectator.service.generateReport({} as PaymentFilter);

      // assert
      spectator.service.reports$.pipe(
        take(1),
        tap(data => {
          expect(data.showHeadline).toBe(true);
          done();
        })).subscribe();
    });
  })

});
