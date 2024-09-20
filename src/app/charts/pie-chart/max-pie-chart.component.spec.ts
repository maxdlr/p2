import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPieChartComponent } from './max-pie-chart.component';

describe('PieChartComponent', () => {
  let component: MaxPieChartComponent;
  let fixture: ComponentFixture<MaxPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxPieChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MaxPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
