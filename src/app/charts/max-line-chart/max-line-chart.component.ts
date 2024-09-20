import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-line-chart',
  templateUrl: './max-line-chart.component.html',
  styleUrl: './max-line-chart.component.scss',
})
export class MaxLineChartComponent implements OnInit {
  @Input({ required: true }) data!: {
    name: string;
    series: { name: string; value: number }[];
  }[];
  @Input() yAxisLabel!: string;
  @Input() xAxisLabel!: string;
  @Input() view: [number, number] = [900, 500];
  @Input() yScaleMin!: number;
  @Input() yScaleMax!: number;

  ngOnInit(): void {
    this.setYChartScale(10);
  }

  setYChartScale(range: number) {
    const values: number[] = [];

    this.data.forEach((points) =>
      points.series.forEach((point) => values.push(point.value)),
    );

    let total = 0;
    values.forEach((value: number) => (total += value));
    const average: number = total / values.length;

    this.yScaleMin = average - (average - Math.min(...values)) - range;
    this.yScaleMax = average + (Math.max(...values) - average) + range;
  }
}
