import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/module';
// import { CountryPickerModule } from 'angular2-countrypicker';

import { homeComponent } from './home/home.component';
import { CoachViewComponent } from './coach-view/coach-view.component';
import { PageLearnerComponent } from './page-learner/page-learner.component';
import { LearnerCompleteProfileComponent } from './learner-complete-profile/learner-complete-profile.component';
import { CoachSignup02Component } from './coach-signup-02/coach-signup-02.component';
import { LearnerPaymentComponent } from './learner-payment/learner-payment.component';
import { UserLearnerDashboardComponent } from './user-learner-dashboard/user-learner-dashboard.component';
import { UserLearnerDashboardCoachInfoComponent } from './user-learner-dashboard-coach-info/user-learner-dashboard-coach-info.component';
import { CalendarOnliComponent } from './calendar-onli/calendar-onli.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: homeComponent
  },
   {
    path: 'calendar',
    component: CalendarOnliComponent
  },
  {
    path: 'userLearnerDashboard',
    component: UserLearnerDashboardComponent
  },
  {
    path: 'learn',
    children: [
      {
        path: 'learn-signup1',
        component: PageLearnerComponent,
      },
      {
        path: 'learn-signup2',
        component: LearnerCompleteProfileComponent,
      },
       {
        path: 'learn-payment',
        component: LearnerPaymentComponent,
      },
    ]
  },
  {
    path: 'coach',
    children: [
      {
        path: 'coach-signup1',
        component: CoachViewComponent
      },
      {
        path: 'coach-signup2',
        component: CoachSignup02Component
      },
    ]
  },
   {
    path: '**',
    component: homeComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    homeComponent,
    CoachViewComponent,
    PageLearnerComponent,
    LearnerCompleteProfileComponent,
    CoachSignup02Component,
    LearnerPaymentComponent,
    UserLearnerDashboardComponent,
    UserLearnerDashboardCoachInfoComponent,
    CalendarOnliComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserAnimationsModule,
  CalendarModule.forRoot(),
  // CountryPickerModule.forRoot(),
  DemoUtilsModule,
  NgbModule,
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
