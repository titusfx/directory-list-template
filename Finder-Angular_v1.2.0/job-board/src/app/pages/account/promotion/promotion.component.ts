import { Component, OnInit } from '@angular/core';

import { promotion } from './promotion.model';
import { promotionData} from './data';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})

/**
 * Promotion Component
 */
export class PromotionComponent implements OnInit {

   // bread crumb items
   breadCrumbItems!: Array<{}>;
   promotionData!: promotion[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Post resume', link:'/account/resume1' },
      { label: 'Promotion page', active: true }
    ];

    // Header Class Added
    document.querySelector('.navbar')?.classList.add('bg-dark');

    // Body Class Added
    document.body.classList.add('bg-secondary');

    // Data Get Function
    this._fetchData();
  }

  // Data Fetch
  private _fetchData() {
    this.promotionData = promotionData;
  }

  result:any = 0;
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkboxes:any = document.getElementsByName('checkAll');
    this.result = 0
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        this.result += parseInt(checkboxes[i].value);
      }
    }
  }

}
