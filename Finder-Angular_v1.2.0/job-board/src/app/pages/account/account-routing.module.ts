import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { ProfileComponent } from "./account-pages/profile/profile.component";
import { ResumesComponent } from "./account-pages/resumes/resumes.component";
import { JobsComponent } from "./account-pages/jobs/jobs.component";
import { NotificationsComponent } from './account-pages/notifications/notifications.component';
import { Resume1Component } from "./post-resume/resume1/resume1.component";
import { Resume2Component } from "./post-resume/resume2/resume2.component";
import { Resume3Component } from "./post-resume/resume3/resume3.component";
import { Resume4Component } from "./post-resume/resume4/resume4.component";
import { Resume5Component } from "./post-resume/resume5/resume5.component";
import { PromotionComponent } from "./promotion/promotion.component";
import { EmployerComponent } from "./employer/employer.component";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: "resumes",
    component: ResumesComponent
  },
  {
    path: "jobs",
    component: JobsComponent
  },
  {
    path: "notifications",
    component: NotificationsComponent
  },
  {
    path: "resume1",
    component: Resume1Component
  },
  {
    path: "resume2",
    component: Resume2Component
  },
  {
    path:"resume3",
    component: Resume3Component
  },
  {
    path: "resume4",
    component: Resume4Component
  },
  {
    path: "resume5",
    component: Resume5Component
  },
  {
    path:"promotion",
    component: PromotionComponent
  },
  {
    path: "employer",
    component:EmployerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AccountRoutingModule { }
