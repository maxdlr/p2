import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-max-line-chart',
  templateUrl: './max-line-chart.component.html',
  styleUrl: './max-line-chart.component.scss',
})
export class MaxLineChartComponent {
  @Input({ required: true }) data!: {
    name: string;
    series: { name: string; value: number }[];
  }[];
  @Input() yAxisLabel!: string;
  @Input() xAxisLabel!: string;
}
