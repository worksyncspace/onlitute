import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { FormsModule } from '@angular/forms';
import { DemoUtilsModule } from './demo-utils/module';
import {MultiSelectModule} from 'primeng/primeng';

/* Components */
import { homeComponent } from './home/home.component';
import { CalendarOnliComponent } from './calendar-onli/calendar-onli.component';

// Learner
import { PageLearnerComponent } from './page-learner/page-learner.component';
import { LearnerCompleteProfileComponent } from './learner-complete-profile/learner-complete-profile.component';
import { LearnerPaymentComponent } from './learner-payment/learner-payment.component';
import { UserLearnerDashboardComponent } from './user-learner-dashboard/user-learner-dashboard.component';

// Coach
import { CoachViewComponent } from './coach-view/coach-view.component';
import { CoachCompleteProfileComponent } from './coach-complete-profile/coach-complete-profile.component';
import { CoachPaymentComponent } from './coach-payment/coach-payment.component';
import { CoachEducationExperienceComponent } from './coach-education-experience/coach-education-experience.component';
import { CoachDashboardComponent } from './coach-dashboard/coach-dashboard.component';
/* Components end*/



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
    path: 'coach-dashboard',
    component: CoachDashboardComponent
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
        component: CoachCompleteProfileComponent
      },
      {
        path: 'coach-payment',
        component: CoachPaymentComponent
      },
      {
        path: 'coach-edu-exp',
        component: CoachEducationExperienceComponent
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
    LearnerPaymentComponent,
    UserLearnerDashboardComponent,
    CalendarOnliComponent,
    CoachCompleteProfileComponent,
    CoachPaymentComponent,
    CoachEducationExperienceComponent,
    CoachDashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    // CountryPickerModule.forRoot(),
    DemoUtilsModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
