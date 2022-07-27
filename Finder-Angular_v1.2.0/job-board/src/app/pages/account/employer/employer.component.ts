import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { list, reviews } from './employer.model';
import { listData, reviewData } from './data';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})

/**
 * Employer Component
 */
export class EmployerComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  public seemoreColleaps = true;
  listData!: list[];
  reviewData!: reviews[];
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Companies', link:'javascript:void(0);' },
      { label: 'Zalo Tech Company', active: true }
    ];

    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      review: ['', [Validators.required]],
    });

    // Header Class Added
    document.querySelector('.navbar')?.classList.add('bg-dark');

    // Data Get Function
    this._fetchData();

    // Body Class Added
    document.body.classList.remove('bg-secondary');
  }

  // Data Fetch
  private _fetchData() {
    this.listData = listData;
    this.reviewData = reviewData;
  }

  /**
   * Open modal
   * @param content modal content
   */
   openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  /**
  * Bootsrap validation form submit method
  */
   validSubmit() {
    this.submit = true;
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
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

  // Review Sort Filter
  sortReviewField:any;
  sortReviewBy:any
  ReviewSortFilter(){
    this.sortReviewField = (document.getElementById("review-sorting") as HTMLInputElement).value;
    if (this.sortReviewField[0] == 'A') {
      this.sortReviewBy = 'desc';
      this.sortReviewField = this.sortReviewField.replace(/A/g, '')
    }
    if (this.sortReviewField[0] == 'D') {
      this.sortReviewBy = 'asc';
      this.sortReviewField = this.sortReviewField.replace(/D/g, '')
    }
  }

}
