import { NgModule } from '@angular/core';
import { MaxPieChartComponent } from './pie-chart/max-pie-chart.component';
import { PieChartModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [MaxPieChartComponent],
  imports: [PieChartModule],
  exports: [MaxPieChartComponent],
})
export class ChartModule {}
