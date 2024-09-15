import { Injectable } from '@angular/core';
import { Olympic } from '../../core/models/Olympic';
import { Participation } from '../../core/models/Participation';
import { Observable } from 'rxjs';
import { PieChartData } from '../PieChartData';

@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  public getPieChartData(olympicData: Observable<Olympic[]>) {
    const pieChartData: PieChartData[] = [];

    olympicData.subscribe((value) => {
      for (const olympic of value) {
        pieChartData.push({
          name: olympic.country,
          value: this.getMedalCount(olympic.participations),
        });
      }
    });

    return pieChartData;
  }

  public getJOCount(olympicData: Observable<Olympic[]>) {
    const years: number[] = [];

    olympicData.subscribe((value) => {
      for (const olympic of value) {
        for (const participation of olympic.participations) {
          if (!years.includes(participation.year))
            years.push(participation.year);
        }
      }
    });

    return years.length;
  }

  public getCountryCount(olympicData: Observable<Olympic[]>) {
    const countries: string[] = [];

    olympicData.subscribe((value) => {
      for (const olympic of value) {
        if (!countries.includes(olympic.country)) {
          countries.push(olympic.country);
        }
      }
    });

    return countries.length;
  }

  private getMedalCount(participations: Participation[]) {
    let medalCount = 0;

    for (const participation of participations) {
      medalCount += participation.medalsCount;
    }

    return medalCount;
  }

  // {
  //   "id": 2,
  //   "country": "Spain",
  //   "participations": [
  //     {
  //       "id": 1,
  //       "year": 2012,
  //       "city": "Londres",
  //       "medalsCount": 20,
  //       "athleteCount": 315
  //     },
}
