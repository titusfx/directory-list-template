import { Component, OnInit } from '@angular/core';

import { jobs } from './jobs.model';
import { jobsData } from './data';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})

/**
 * Jobs Component
 */
export class JobsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  jobsData!: jobs[];

  constructor() { }

  ngOnInit(): void {
     /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/profile' },
      { label: 'Saved jobs', active: true }
    ];

    // Data Get Function
    this._fetchData();

    // Breadcrumb class add
    document.querySelector('.breadcrumb')?.classList.add('breadcrumb-light');

  }

  // Data Fetch
  private _fetchData() {
    this.jobsData = jobsData;
  }

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

}
