import { Component, Input } from '@angular/core';
import { PieChartData } from '../PieChartData';
import { Router } from '@angular/router';

@Component({
  selector: 'app-max-pie-chart',
  templateUrl: './max-pie-chart.component.html',
  styleUrl: './max-pie-chart.component.scss',
})
export class MaxPieChartComponent {
  @Input({ required: true }) data!: PieChartData[];
  @Input() view: [number, number] = [500, 500];
  @Input() animations!: boolean;
  @Input() legendVBC = false;
  @Input() labels = true;

  constructor(private router: Router) {}

  public selectCountry(event: { title: string; name: string; value: number }) {
    console.log(event);
    this.router.navigate([`details/${event.name}`]);
  }

  protected readonly alert = alert;
}
