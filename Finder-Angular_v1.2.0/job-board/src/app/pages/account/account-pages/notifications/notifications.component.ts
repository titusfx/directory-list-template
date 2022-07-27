import { Component, OnInit } from '@angular/core';

import { notification } from './notifications.model';
import { notificationData } from './data';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})

/**
 * Notifications Component
 */
export class NotificationsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  notificationData!: notification[];
  masterSelected!:boolean;
  checkedList:any;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Account', link:'/account/profile' },
      { label: 'Notifications', active: true }
    ];

    // Breadcrumb class add
    document.querySelector('.breadcrumb')?.classList.add('breadcrumb-light');

    // Data Get Function
    this._fetchData();

  }

  // Data Fetch
  private _fetchData() {
    this.notificationData = notificationData;
  }

  /**
   * On mobile toggle button clicked
   */
   SideBarMenu() {
    document.getElementById('account-nav')?.classList.toggle('show');
  }

  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.notificationData.length; i++) {
      this.notificationData[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.notificationData.length; i++) {
      if(this.notificationData[i].isSelected)
      this.checkedList.push(this.notificationData[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }


}
