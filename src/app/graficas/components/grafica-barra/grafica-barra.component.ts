import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal:boolean = false; //Vertical por defecto
  
  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor:'#22F720', hoverBackgroundColor:'#FF0000'},
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor:'#F76F07', hoverBackgroundColor:'#FF0000' },
    //{ data: [11, 14, 8, 9, 11, 10, 4], label: 'Series C', backgroundColor:'#4620F7', hoverBackgroundColor:'#FF0000' }
  ];

  constructor() { 
    
  }

  ngOnInit(): void {
    if (this.horizontal){
      this.barChartType = 'horizontalBar'
      console.log(this.horizontal);
    }
    console.log(this.horizontal);
  }

}
