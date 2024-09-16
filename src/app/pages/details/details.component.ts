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
  country!: Olympic | null;

  constructor(
    private route: ActivatedRoute,
    private olympicService: OlympicService,
  ) {}

  ngOnInit() {
    this.getOlympic();
  }

  getOlympic() {
    this.selectedId = this.route.snapshot.params['id'];
    //todo: this doesnt work.
    console.log(
      'gotten ?olympic: ',
      this.olympicService.getOlympicById(this.selectedId),
    );
  }
}
