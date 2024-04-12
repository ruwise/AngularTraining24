import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAnalyticsComponent } from './customer-analytics/customer-analytics.component';

const routes: Routes = [

  { path: '', redirectTo: 'viewPie', pathMatch: 'full'},  
  { path: 'viewPie',component: CustomerAnalyticsComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
