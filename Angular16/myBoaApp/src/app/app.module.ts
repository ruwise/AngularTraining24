import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AgePipePipe } from './pipes/age-pipe.pipe';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { OrderComponent } from './components/order/order.component';
import { PremiumorderComponent } from './components/premiumorder/premiumorder.component';
import { NormalorderComponent } from './components/normalorder/normalorder.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighLightDirective } from './directives/high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AgePipePipe,
    UserComponent,
    HomeComponent,
    FeedbackComponent,
    ContactUsComponent,
    OrderComponent,
    PremiumorderComponent,
    NormalorderComponent,
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    HighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 