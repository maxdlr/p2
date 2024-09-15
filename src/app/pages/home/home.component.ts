import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';
import { ChartDataService } from '../../charts/services/chart-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Olympic[]> = of([]);
  public chartDataService: ChartDataService = new ChartDataService();

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
  }

  public getPieChartData() {
    return this.chartDataService.getPieChartData(this.olympics$);
  }

  public getSubtitleData$() {
    return [
      {
        title: 'Number of JOs',
        value: this.chartDataService.getJOCount(this.olympics$),
      },
      {
        title: 'Number of countries',
        value: this.chartDataService.getCountryCount(this.olympics$),
      },
    ];
  }
}
