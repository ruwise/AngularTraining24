import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-customer-analytics',
  templateUrl: './customer-analytics.component.html',
  styleUrls: ['./customer-analytics.component.css']
})
export class CustomerAnalyticsComponent implements OnInit {
  data: any;

  constructor(private primengConfig: PrimeNGConfig) {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}

