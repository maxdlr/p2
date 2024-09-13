import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PieChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [PieChartComponent],
  imports: [CommonModule, PieChartModule],
  exports: [PieChartComponent],
})
export class ChartModule {}
