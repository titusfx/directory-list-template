import { Component, OnInit } from '@angular/core';

import { topics } from './help-center.model';
import { topicsData } from './data';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.component.html',
  styleUrls: ['./help-center.component.scss']
})

/**
 * HelpCenter Component
 */
export class HelpCenterComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  topicsData!: topics[];

  constructor() { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Help center', active: true }
    ];

    // Data Get Function
    this._fetchData();

    // Breadcrumb class add
    document.querySelector('.breadcrumb')?.classList.add('breadcrumb-light');
  }

  // Data Fetch
  private _fetchData() {
    this.topicsData = topicsData;
  }

}
