import { TestBed } from '@angular/core/testing';

import { ChartDataService } from './chart-data.service';

describe('PieChartDataFormatterService', () => {
  let service: ChartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});