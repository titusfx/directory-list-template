import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';

import { properties, finder, agent, pager } from './home2.model';
import { propertiesData, finderData, agentData, pagerData } from './data';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})

/**
 * Home2 Component
 */
export class Home2Component implements OnInit {

  propertiesData!: properties[];
  finderData!: finder[];
  agentData!: agent[];
  pagerData!: pager[];

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;


  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    // Chat Data Get Function
    this._fetchData();

    // Rent Select data
    document.getElementById("rent-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const rent = document.querySelector('.rent') as HTMLElement;
      rent.innerText = input.innerText;
     });

     // Location Select data
     document.getElementById("location-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const location = document.querySelector('.location') as HTMLElement;
      location.innerText = input.innerText;
     });

     // Property Select data
     document.getElementById("property-content")?.addEventListener("click",function(e) {
      const input = e.target as HTMLElement;
      const property = document.querySelector('.property') as HTMLElement;
      property.innerText = input.innerText;
     });

  }

  // Chat Data Fetch
  private _fetchData() {
    this.propertiesData = propertiesData;
    this.finderData = finderData;
    this.agentData = agentData;
    this.pagerData = pagerData;
  }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true
  };

  /**
   * Top properties on Finder
   */
   Finder = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 2,
      }
    }
  };

  /**
   * Open modal
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

}
