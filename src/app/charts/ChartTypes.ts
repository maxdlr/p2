export interface PieChartData {
  name: string;
  value: number;
}

export interface PieChartSelectEvent {
  name: string;
  value: number;
  label: string;
}

export interface LineChartData {
  name: string;
  series: { name: string; value: number }[];
}

export interface LineChartSetup {
  data: LineChartData[];
  xAxisLabel: string;
  yAxisLabel: string;
}

export interface PieChartToolTip {
  data: PieChartSelectEvent;
  endAngle: number;
  index: number;
  padAngle: number;
  pos: number[];
  startAngle: number;
  value: number;
}
