import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UserComponent } from './components/user/user.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OrderComponent } from './components/order/order.component';
import { NormalorderComponent } from './components/normalorder/normalorder.component';
import { PremiumorderComponent } from './components/premiumorder/premiumorder.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard", component: DashboardComponent,
    children: [
      { path: "dashboard", redirectTo: "home", pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "customer", component: CustomerComponent },
      { path: "user", component: UserComponent },
      {
        path: 'order', component: OrderComponent,
        children: [
          { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
          { path: 'normalOrder', component: NormalorderComponent },
          { path: 'premiumOrder', component: PremiumorderComponent },
        ]
      },
      
      { path: 'view-customer-analytics', loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule)},
      { path: "feedback", component: FeedbackComponent },
      { path: "contactus", component: ContactUsComponent }
   ]
  },
  { path: "dashboard/logout", component: LoginComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
