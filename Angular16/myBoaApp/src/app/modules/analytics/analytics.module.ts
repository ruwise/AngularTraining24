import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ChartModule} from 'primeng/chart';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { CustomerAnalyticsComponent } from './customer-analytics/customer-analytics.component';


@NgModule({
  declarations: [
    CustomerAnalyticsComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    ChartModule
  ]
})
export class AnalyticsModule { }
