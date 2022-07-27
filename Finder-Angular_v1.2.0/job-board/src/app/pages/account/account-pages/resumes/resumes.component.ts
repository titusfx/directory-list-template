import { Component, OnInit } from '@angular/core';

import { resumes } from './resumes.model';
import { resumesData } from './data';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.scss']
})

/**
 * ResumesComponent
 */
export class ResumesComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  resumesData!: resumes[];

  constructor() { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/profile' },
      { label: 'My resumes', active: true }
    ];

    // Data Get Function
    this._fetchData();

    // Breadcrumb class add
    document.querySelector('.breadcrumb')?.classList.add('breadcrumb-light');
  }

  // Data Fetch
  private _fetchData() {
    this.resumesData = resumesData;
  }

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

}
