import { Component, OnInit } from '@angular/core';

import { blogs } from './blog-grid.model';
import { blogsData } from './data';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})

/**
 * BlogGrid Component
 */
export class BlogGridComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  blogsData!: blogs[];
  term:any

  constructor() { }

  ngOnInit(): void {
     /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Blog', active: true }
    ];

    // Header Class Added
    document.querySelector('.navbar')?.classList.add('bg-dark');

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.blogsData = blogsData;
  }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true
  };

  /**
   * Swiper setting
   */
   blog = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true
  };

  /**
   * Filter button clicked
   */
   FilterSidebar() {
    document.getElementById('blog-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
   }

   /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.getElementById('blog-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  /// Sort filter
  sortField:any;
  sortBy:any
  SortFilter(){
    this.sortField = (document.getElementById("sortby") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

}
