import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Range Slider
import { Options } from '@angular-slider/ngx-slider';

// Swiper Slider
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';

import { category, jobCity, companies } from './home1.model';
import { categoryData, jobCityData, companiesData } from './data';

@Component({
  selector: 'app-index',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})

/**
 * Index Component
 */
export class Home1Component implements OnInit {

  categoryData!: category[];
  jobCityData!: jobCity[];
  companiesData!: companies[];

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
     // Chat Data Get Function
     this._fetchData();

    // Location Select data
    document.getElementById("location-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const location = document.querySelector('.location') as HTMLElement;
      location.innerText = input.innerText;
    });

    // distance Select data
    document.getElementById("distance-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const location = document.querySelector('.distance') as HTMLElement;
      location.innerText = input.innerText;
    });
  }

  // Chat Data Fetch
  private _fetchData() {
    this.categoryData = categoryData;
    this.jobCityData = jobCityData;
    this.companiesData = companiesData;
  }

  // Range Slider
  value: number = 5000;
  highValue: number = 14000;
  options: Options = {
    floor: 1000,
    ceil: 20000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };

  /**
   * Swiper setting
   */
   jobCity = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: true,
    loop:true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 5,
      }
    }
  };

  /**
   * Swiper setting
   */
   companies = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: true,
    loop:true,
    breakpoints:{
      768:{
        slidesPerView: 4,
      },
      1200:{
        slidesPerView: 6,
      }
    }
  };

}
