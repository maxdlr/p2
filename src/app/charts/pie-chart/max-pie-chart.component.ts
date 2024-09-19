import { Component, Input, output } from '@angular/core';
import { PicChartData, PieChartSelectEvent } from '../ChartTypes';

@Component({
  selector: 'app-max-pie-chart',
  templateUrl: './max-pie-chart.component.html',
  styleUrl: './max-pie-chart.component.scss',
})
export class MaxPieChartComponent {
  @Input({ required: true }) data!: PicChartData[];
  @Input() view: [number, number] = [500, 500];
  @Input() animations!: boolean;
  @Input() legendVBC = false;
  @Input() labels = true;
  memberSelect = output<PieChartSelectEvent>();

  public handleSelect(event: PieChartSelectEvent) {
    this.memberSelect.emit(event);
  }
}
