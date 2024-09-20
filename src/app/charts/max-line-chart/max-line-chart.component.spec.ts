import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLineChartComponent } from './max-line-chart.component';

describe('MaxLineChartComponent', () => {
  let component: MaxLineChartComponent;
  let fixture: ComponentFixture<MaxLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaxLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
