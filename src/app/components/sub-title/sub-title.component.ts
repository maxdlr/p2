import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-title',
  standalone: true,
  imports: [],
  templateUrl: './sub-title.component.html',
  styleUrl: './sub-title.component.scss',
})
export class SubTitleComponent {
  @Input({ required: true }) data!: { title: string; value: number };
}
