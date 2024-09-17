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
  olympic$!: Olympic | null;

  constructor(
    private route: ActivatedRoute,
    private olympicService: OlympicService,
  ) {}

  ngOnInit() {
    this.getOlympic();
  }

  getOlympic() {
    this.selectedId = this.route.snapshot.params['id'];
    // this.olympic$ = this.olympicService.getOlympicById(this.selectedId);
    console.log(
      'on details page with: ',
      this.olympicService.getOlympicById(this.selectedId),
    );
    if (this.olympic$) return this.olympic$;
    return null;
  }
}
