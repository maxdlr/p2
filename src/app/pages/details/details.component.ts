import { Component, OnInit } from '@angular/core';
import { Olympic } from '../../core/models/Olympic';
import { OlympicService } from '../../core/services/olympic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  selectedId!: number;
  olympic$!: Olympic;
  lineChartData!: {
    data: { name: string; series: { name: string; value: number }[] }[];
    xAxisLabel: string;
    yAxisLabel: string;
  };

  constructor(
    private route: ActivatedRoute,
    private olympicService: OlympicService,
  ) {}

  ngOnInit() {
    this.selectedId = this.route.snapshot.params['id'];
    this.getOlympic();
    this.setLineChartData();
    console.log(this.lineChartData);
  }

  public getOlympic(): void {
    this.olympicService
      .getOlympics()
      .subscribe(
        (value) =>
          (this.olympic$ = value.filter(
            (olympic: Olympic) => olympic.id == this.selectedId,
          )[0]),
      );
  }

  public setLineChartData(): void {
    this.lineChartData.data = [
      {
        name: 'Germany',
        series: [
          {
            name: '2010',
            value: 7300000,
          },
          {
            name: '2011',
            value: 8940000,
          },
        ],
      },
      {
        name: 'USA',
        series: [
          {
            name: '2010',
            value: 7870000,
          },
          {
            name: '2011',
            value: 8270000,
          },
        ],
      },
    ];
    this.lineChartData.xAxisLabel = 'years';
    this.lineChartData.yAxisLabel = 'medals/participation';
  }
}
