import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbAccordionModule, NgbDropdownModule, NgbNavModule, NgbRatingModule, NgbCollapseModule, NgbTooltipModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

// Drop Zone
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

// Swiper Slider
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Component
import { AccountRoutingModule } from "./account-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { ProfileComponent } from './account-pages/profile/profile.component';
import { ResumesComponent } from './account-pages/resumes/resumes.component';
import { JobsComponent } from './account-pages/jobs/jobs.component';
import { NotificationsComponent } from './account-pages/notifications/notifications.component';
import { Resume1Component } from './post-resume/resume1/resume1.component';
import { Resume2Component } from './post-resume/resume2/resume2.component';
import { Resume3Component } from './post-resume/resume3/resume3.component';
import { Resume4Component } from './post-resume/resume4/resume4.component';
import { Resume5Component } from './post-resume/resume5/resume5.component';
import { PromotionComponent } from './promotion/promotion.component';
import { EmployerComponent } from './employer/employer.component';

import { SortByAccountPipe } from '../account/sort-by.pipe';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    ProfileComponent,
    ResumesComponent,
    JobsComponent,
    NotificationsComponent,
    Resume1Component,
    Resume2Component,
    Resume3Component,
    Resume4Component,
    Resume5Component,
    PromotionComponent,
    EmployerComponent,
    SortByAccountPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbRatingModule,
    NgbCollapseModule,
    NgbTooltipModule,
    NgbProgressbarModule,
    SharedModule,
    AccountRoutingModule,
    DropzoneModule,
    SwiperModule,
    FlatpickrModule.forRoot(),
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class AccountModule { }
