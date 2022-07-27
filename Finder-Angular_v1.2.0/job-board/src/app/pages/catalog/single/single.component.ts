import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { interest } from './single.model';
import { interestData } from './data';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})

/**
 * Single Component
 */
export class SingleComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  interestData!: interest[];
  public firstColleaps = true;
  public msgColleaps = true;

  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Find jobs', link:'/catalog/list' },
      { label: 'Partnership Manager', active: true }
    ];

    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.interestData = interestData;
  }

  /**
   * Swiper setting
   */
   interested = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    pagination: true,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      1200:{
        slidesPerView: 3,
      }
    }
  };

  /**
  * Category Droup Down
  */
   categoryDownClick(event:any) {
    var val = event.target as HTMLElement;
    const categories = document.querySelector('.categories') as HTMLElement;
    categories.innerText = val.innerText;
 }

 /**
  * Location Droup Down
  */
  locationDownClick(event:any) {
    var val = event.target as HTMLElement;
    const location = document.querySelector('.location') as HTMLElement;
    location.innerText = val.innerText;
 }

 /**
  * Distance Droup Down
  */
  distanceDownClick(event:any) {
    var val = event.target as HTMLElement;
    const distance = document.querySelector('.distance') as HTMLElement;
    distance.innerText = val.innerText;
 }

 /**
  * Date Droup Down
  */
  dateDownClick(event:any) {
    var val = event.target as HTMLElement;
    const date = document.querySelector('.date') as HTMLElement;
    date.innerText = val.innerText;
 }

 /**
  * Type Droup Down
  */
  typeDownClick(event:any) {
    var val = event.target as HTMLElement;
    const type = document.querySelector('.type') as HTMLElement;
    type.innerText = val.innerText;
 }

 /**
  * Company Droup Down
  */
  companyDownClick(event:any) {
    var val = event.target as HTMLElement;
    const company = document.querySelector('.company') as HTMLElement;
    company.innerText = val.innerText;
 }

 /**
  * Range Droup Down
  */
  rangeDownClick(event:any) {
    var val = event.target as HTMLElement;
    const range = document.querySelector('.range') as HTMLElement;
    range.innerText = val.innerText;
 }

}
