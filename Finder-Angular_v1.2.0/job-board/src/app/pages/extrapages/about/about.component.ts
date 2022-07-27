import { Component, OnInit } from '@angular/core';

import { work, review, brand } from './about.model';
import { workData, reviewData, brandData } from './data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

/**
 * About Component
 */
export class AboutComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  workData!: work[];
  reviewData!: review[];
  brandData!: brand[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'About', active: true }
    ];

    // Header Class Added
    document.querySelector('.navbar')?.classList.add('bg-dark');

    // Breadcrumb class add
    document.querySelector('.breadcrumb')?.classList.add('breadcrumb-light');

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.workData = workData;
    this.reviewData = reviewData;
    this.brandData = brandData;
  }

  /**
   * Swiper setting
   */
   review = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: true,
    loop:true
  };

  /**
   * Swiper setting
   */
   brand = {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 25,
    pagination: true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 5,
      }
    }
  };

}
