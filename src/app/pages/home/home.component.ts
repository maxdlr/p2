import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { Olympic } from '../../core/models/Olympic';
import { Router } from '@angular/router';
import {
  PieChartData,
  PieChartSelectEvent,
  PieChartToolTip,
} from '../../charts/ChartTypes';
import { Participation } from '../../core/models/Participation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Olympic[]> = of([]);
  public subTitleData$!: { title: string; value: number }[];
  public pieChartData: PieChartData[] = [];
  public toolTipText!: (value: PieChartToolTip) => string;

  constructor(
    private olympicService: OlympicService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();
    this.getSubtitleData();
    this.getPieChartData();
    this.toolTipText = (value) => {
      return `
      ${value.data.name}<br>
      🏆 ${value.data.value}
      `;
    };
  }

  public getPieChartData(): void {
    try {
      this.olympics$.subscribe((olympics: Olympic[]) => {
        const data: PieChartData[] = [];
        olympics.forEach((olympic: Olympic) => {
          let medalCount = 0;

          olympic.participations.forEach((participation: Participation) => {
            medalCount += participation.medalsCount;
          });

          data.push({
            name: olympic.country,
            value: medalCount,
          });

          this.pieChartData = data;
        });
      });
    } catch (err) {
      this.toastr.error(
        'Error while fetching pie chart data',
        (err as Error).message,
      );
    }
  }

  public getSubtitleData() {
    this.olympics$.subscribe((olympics: Olympic[]) => {
      const years: number[] = [];
      const countries: string[] = [];

      olympics.forEach((olympic: Olympic) => {
        if (!countries.includes(olympic.country))
          countries.push(olympic.country);

        olympic.participations.forEach((participation: Participation) => {
          if (!years.includes(participation.year))
            years.push(participation.year);
        });
      });

      this.subTitleData$ = [
        {
          title: 'Number of JOs',
          value: years.length,
        },
        {
          title: 'Number of countries',
          value: countries.length,
        },
      ];
    });
  }

  public async selectCountry(event: PieChartSelectEvent) {
    const olympic: Olympic | null = this.olympicService.getOlympicByName(
      event.name,
    );

    if (olympic) {
      await this.router.navigate([`details/${olympic.id}`]);
    }
  }
}
