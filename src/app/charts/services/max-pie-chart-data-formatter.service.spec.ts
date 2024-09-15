import { TestBed } from '@angular/core/testing';

import { OlympicToPieChartDataService } from './olympic-to-pie-chart-data.service';

describe('PieChartDataFormatterService', () => {
  let service: OlympicToPieChartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlympicToPieChartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
