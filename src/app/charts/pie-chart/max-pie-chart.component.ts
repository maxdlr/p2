import { Component, Input, output } from '@angular/core';
import {
  PieChartData,
  PieChartSelectEvent,
  PieChartToolTip,
} from '../ChartTypes';

@Component({
  selector: 'app-max-pie-chart',
  templateUrl: './max-pie-chart.component.html',
  styleUrl: './max-pie-chart.component.scss',
})
export class MaxPieChartComponent {
  @Input({ required: true }) data!: PieChartData[];
  @Input() animations!: boolean;
  @Input() legend = false;
  @Input() labels = true;
  memberSelect = output<PieChartSelectEvent>();
  @Input() legendTitle!: string;
  @Input() toolTipText!: (value: PieChartToolTip) => string;

  public handleSelect(event: PieChartSelectEvent) {
    this.memberSelect.emit(event);
  }
}
