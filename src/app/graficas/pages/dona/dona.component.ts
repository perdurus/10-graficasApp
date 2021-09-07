import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  
  // Doughnut
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 550]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors:Color[] = [
    {backgroundColor: ['#D26BE3', '#54E367', '#E3613D', '#5FE3BB']}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
