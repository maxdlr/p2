import { Inject, Injectable } from '@angular/core';
import { Olympic } from '../../core/models/Olympic';

@Injectable({
  providedIn: 'root',
})
export class OlympicToPieChartDataService {
  private readonly olympicData!: Olympic[];

  constructor(@Inject(Olympic) data: Olympic[]) {
    this.olympicData = data;
  }

  public olympicsToPieChartDataFormatter() {
    const olympicData: Olympic[] = this.olympicData;
    const pieChartData = [];

    for (const olympic of olympicData) {
      pieChartData.push({
        name: olympic.country,
        value: olympic.participations?.length,
      });
    }

    return pieChartData;
  }
}
