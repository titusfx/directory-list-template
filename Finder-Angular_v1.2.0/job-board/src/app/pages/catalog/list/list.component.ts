import { Component, OnInit } from '@angular/core';

import { List } from './list.model';
import { listData } from './data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

/**
 * List Component
 */
export class ListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  listData!: List[];
  ListCount:any;
  term:any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Find jobs', active: true }
    ];

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.listData = listData;
    this.listDatas = Object.assign([], this.listData);
    this.ListCount = this.listData.length;
  }

  /**
  * Category Droup Down
  */
  categoryDownClick(event:any) {
    var val = (event.target as HTMLElement).innerText;
    const categories = document.querySelector('.categories') as HTMLElement;
    categories.innerText = val;
  }

 listDatas:any;
 /**
  * Location Droup Down
  */
  locationDownClick(event:any) {
    var val = (event.target as HTMLElement).innerText;
    const location = document.querySelector('.location') as HTMLElement;
    location.innerText = val;
 }

 /**
  * Distance Droup Down
  */
  distanceDownClick(event:any) {
    var val = (event.target as HTMLElement).innerText;
    const distance = document.querySelector('.distance') as HTMLElement;
    distance.innerText = val;
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
    var val = (event.target as HTMLElement).innerText;
    const type = document.querySelector('.type') as HTMLElement;
    type.innerText = val;
    this.listDatas = this.listData.filter( (data:any) => {
      return data.type === val;
    });
    this.ListCount = this.listDatas.length;
 }

 /**
  * Company Droup Down
  */
  companyDownClick(event:any) {
    var val = (event.target as HTMLElement).innerText;
    const company = document.querySelector('.company') as HTMLElement;
    company.innerText = val;
    this.listDatas = this.listData.filter( (data:any) => {
      return data.sub_title === val;
    });
    this.ListCount = this.listDatas.length;
 }

 /**
  * Range Droup Down
  */
  rangeDownClick(event:any) {
    var val = (event.target as HTMLElement).innerHTML;
    const range = document.querySelector('.range') as HTMLElement;
    range.innerText = val;
    this.listDatas = this.listData.filter( (data:any) => {
      return data.price > val.split(" - ")[0] && data.price < val.split(" - ")[1];
    });
    this.ListCount = this.listDatas.length;
 }

  // Sort filter
  sortField:any;
  sortBy:any
  SortFilter(){
    this.sortField = (document.getElementById("sorting") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

  // Find Jobs
  FindJobs(){
    const location = (document.querySelector('.location') as HTMLElement).innerHTML;
    const distance = (document.querySelector('.distance') as HTMLElement).innerHTML;
    const categories = (document.querySelector('.categories') as HTMLElement).innerHTML;
    this.listDatas = this.listData.filter( (data:any) => {
      return data.category === categories || data.distance === distance || data.location === location;
    });
    this.ListCount = this.listDatas.length;
  }


}
