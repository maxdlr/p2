import { NgModule } from '@angular/core';
import { MaxPieChartComponent } from './pie-chart/max-pie-chart.component';
import { LineChartModule, PieChartModule } from '@swimlane/ngx-charts';
import { MaxLineChartComponent } from './max-line-chart/max-line-chart.component';

@NgModule({
  declarations: [MaxPieChartComponent, MaxLineChartComponent],
  imports: [PieChartModule, LineChartModule],
  exports: [MaxPieChartComponent, MaxLineChartComponent],
})
export class ChartModule {}
