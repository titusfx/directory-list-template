import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbDropdownModule, NgbRatingModule, NgbTooltipModule, NgbCollapseModule, NgbAccordionModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

// Ngx Sliders
import { NgxSliderModule } from '@angular-slider/ngx-slider';

// Swiper Slider
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// Flat Picker
import { FlatpickrModule } from 'angularx-flatpickr';

// Search Filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// Component
import { CatalogRoutingModule } from "./catalog-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { SortByCatalogPipe } from '../catalog/sort-by.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    ListComponent,
    SingleComponent,
    SortByCatalogPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbAccordionModule,
    NgbPopoverModule,
    NgxSliderModule,
    Ng2SearchPipeModule,
    CatalogRoutingModule,
    SharedModule,
    SwiperModule,
    FlatpickrModule.forRoot()
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class CatalogModule { }
