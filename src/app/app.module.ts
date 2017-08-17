import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from './demo-utils/module';

import { Fold1Component } from './fold1/fold1.component';
import { CoachViewComponent } from './coach-view/coach-view.component';
import { LearnViewComponent } from './learn-view/learn-view.component';
import { LearnerSignup02Component } from './learner-signup-02/learner-signup-02.component';
import { CoachSignup02Component } from './coach-signup-02/coach-signup-02.component';
import { LearnPaymentComponent } from './learn-payment/learn-payment.component';
import { UserLearnerDashboardComponent } from './user-learner-dashboard/user-learner-dashboard.component';
import { UserLearnerDashboardCoachInfoComponent } from './user-learner-dashboard-coach-info/user-learner-dashboard-coach-info.component';
import { CalendarOnliComponent } from './calendar-onli/calendar-onli.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: Fold1Component
  },
   {
    path: 'cal_test',
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
        component: LearnViewComponent,
      },
      {
        path: 'learn-signup2',
        component: LearnerSignup02Component,
      },
       {
        path: 'learn-payment',
        component: LearnPaymentComponent,
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
    component: Fold1Component
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    Fold1Component,
    CoachViewComponent,
    LearnViewComponent,
    LearnerSignup02Component,
    CoachSignup02Component,
    LearnPaymentComponent,
    UserLearnerDashboardComponent,
    UserLearnerDashboardCoachInfoComponent,
    CalendarOnliComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserAnimationsModule,
  CalendarModule.forRoot(),
  DemoUtilsModule,
  NgbModule,
  BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
