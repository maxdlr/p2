import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';
import { PieChartData } from '../../charts/PieChartData';
import { OlympicToPieChartDataService } from '../../charts/services/olympic-to-pie-chart-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Olympic[]> = of([]);
  // public chartData!: PieChartData[];
  public test = [{ name: 'soemthing', value: 2 }] as PieChartData[];

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.makeChartData();
  }

  makeChartData() {
    const olympicData: Olympic[] = [];
    this.olympics$.subscribe((value) => {
      for (const olympic of value) {
        olympicData.push(olympic);
      }
    });

    const olympicToPieChartDataService: OlympicToPieChartDataService =
      new OlympicToPieChartDataService(olympicData);

    return olympicToPieChartDataService.olympicsToPieChartDataFormatter();
  }
}
