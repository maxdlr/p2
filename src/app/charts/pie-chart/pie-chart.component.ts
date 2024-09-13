import { Component, Input } from '@angular/core';
import { PieChartData } from '../PieChartData';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  @Input({ required: true }) dataVBC!: PieChartData[];
  @Input() viewVBC: [number, number] = [800, 300];
  @Input() animationsVBC!: boolean;
  @Input() legendVBC = true;
}
