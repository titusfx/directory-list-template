import { Component, OnInit } from '@angular/core';

import { category, steps, promotion, jobCity, reviews } from './home2.model';
import { categoryData, stepsData, promotionData, jobCityData, reviewsData } from './data';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})

/**
 * Home2 Component
 */
export class Home2Component implements OnInit {

  categoryData!: category[];
  stepsData!: steps[];
  promotionData!: promotion[];
  jobCityData!: jobCity[];
  reviewsData!: reviews[];

  constructor() { }

  ngOnInit(): void {
    // Chat Data Get Function
    this._fetchData();

    // Category Select data
    document.getElementById("category-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const category = document.querySelector('.category') as HTMLElement;
      category.innerText = input.innerText;
    });

    // Location Select data
    document.getElementById("location-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const location = document.querySelector('.location') as HTMLElement;
      location.innerText = input.innerText;
    });
  }

  // Chat Data Fetch
  private _fetchData() {
    this.categoryData = categoryData;
    this.stepsData = stepsData;
    this.promotionData = promotionData;
    this.jobCityData = jobCityData;
    this.reviewsData = reviewsData;
  }

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
   reviews = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop:true
  };

}
