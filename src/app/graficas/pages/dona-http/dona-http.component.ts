import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
 
  // Doughnut
  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 550]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors:Color[] = [
    {backgroundColor: ['#D26BE3', '#54E367', '#E3613D', '#5FE3BB']}
  ];


  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
/*
    this.graficasService.getUsersRedesSociales().subscribe(
      data => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      }
    );
    */
    this.graficasService.getDataRRSS().subscribe(
      ({labels, values}) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      }
      );
  }

}
