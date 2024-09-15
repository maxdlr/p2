import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Olympic } from '../../core/models/Olympic';
import { OlympicService } from '../../core/services/olympic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  // Todo: implement conditional formatting dependent of route parameter
  selectedId!: number;
  country!: Olympic | null;

  constructor(
    private route: ActivatedRoute,
    private olympicService: OlympicService,
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = Number(params.get('id'));
        this.country = this.olympicService.getOlympic(this.selectedId);
      }),
    );
  }
}
