import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartData: number[]  = [29, 34, 90];
  @Input() doughnutChartLabels: string[] = ['Talleres', 'Naranjas', 'Trasnsporte'];
  @Input() doughnutChartType: string = 'doughnut';


  constructor() { }

  ngOnInit(): void {
  }

}
