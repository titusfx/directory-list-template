import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

/**
 * Profile Component
 */
export class ProfileComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  currentfield!: boolean;
  newfield!: boolean;
  confirmfield!: boolean;
  public socialsColleaps = true;

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

    // Breadcrumb class add
    document.querySelector('.breadcrumb')?.classList.add('breadcrumb-light');
  }

  /**
   * Password Hide/Show
   */
   toggleFieldTextType() {
    this.currentfield  = !this.currentfield;
  }

  /**
   * Password Hide/Show
   */
   toggleNewFieldType() {
    this.newfield  = !this.newfield;
  }

  /**
   * Password Hide/Show
   */
   toggleConfirmFieldType() {
    this.confirmfield  = !this.confirmfield;
  }

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

}
