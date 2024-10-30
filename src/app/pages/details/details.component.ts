import { Component, OnInit } from '@angular/core';
import { Olympic } from '../../core/models/Olympic';
import { OlympicService } from '../../core/services/olympic.service';
import { ActivatedRoute, Router } from "@angular/router";
import { LineChartSetup } from '../../charts/ChartTypes';
import { Participation } from '../../core/models/Participation';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  public selectedId!: number;
  public olympic$!: Olympic;
  public lineChartSetup$!: LineChartSetup;
  public subTitleData$!: { title: string; value: number }[];

  constructor(
    private route: ActivatedRoute,
    private olympicService: OlympicService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.selectedId = this.route.snapshot.params['id'];
    this.getOlympic();
    this.getLineChartSetup();
    this.getSubtitleData();
  }

  public getOlympic(): void {
    this.olympicService.getOlympics().subscribe(async (olympics: Olympic[]) => {
      this.olympic$ = olympics.filter(
        (olympic: Olympic) => olympic.id == this.selectedId,
      )[0];
      if (!this.olympic$) await this.router.navigate(['not-found'])
    });
  }

  public getLineChartSetup(): void {
    const setup: LineChartSetup = {
      data: [
        {
          name: 'number of medals',
          series: [],
        },
      ],
      xAxisLabel: 'years',
      yAxisLabel: 'count',
    };

    this.olympicService.getOlympics().subscribe((olympics: Olympic[]) => {
      const olympic = olympics.filter(
        (olympic: Olympic) => olympic.id == this.selectedId,
      )[0];

      if (olympic) {
        olympic.participations.forEach((participation: Participation) => {
          setup.data[0].series.push({
            name: participation.year.toString(),
            value: participation.athleteCount,
          });
        });

        this.lineChartSetup$ = setup;
      }
    });
  }

  public getSubtitleData() {
    this.olympicService.getOlympics().subscribe((olympics: Olympic[]) => {
      let medals = 0;
      let athletes = 0;

      const olympic = olympics.filter(
        (olympic: Olympic) => olympic.id == this.selectedId,
      )[0];

      if (olympic) {
        olympic.participations.forEach((participation: Participation) => {
          medals += participation.medalsCount;
          athletes += participation.athleteCount;
        });

        this.subTitleData$ = [
          {
            title: 'Number of entries',
            value: olympic.participations.length,
          },
          {
            title: 'Number of medals',
            value: medals,
          },
          {
            title: 'Number of athletes',
            value: athletes,
          },
        ];
      }
    });
  }
}
