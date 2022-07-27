import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { news } from './single-blog.model';
import { newsData } from './data';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.scss']
})

/**
 * SingleBlog Component
 */
export class SingleBlogComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  newsData!: news[];
  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  id = '3iwCzT2P7vw';

  private player: any;
  private ytEvent : any;

  constructor(private formBuilder: UntypedFormBuilder, private modalService: NgbModal) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Blog', link:'' },
      { label: '15 Tips for a Better Resume', active: true }
    ];

    // Header Class Added
    document.querySelector('.navbar')?.classList.add('bg-dark');
    // document.querySelector('.modal-content')?.classList.add('video-modal');

    /**
     * Bootstrap validation form data
     */
     this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });

    // Data Get Function
    this._fetchData();
  }

   // Data Fetch
   private _fetchData() {
    this.newsData = newsData;
  }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop:true
  };

  /**
   * Latest Car Swiper setting
   */
   editor = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: true,
    navigation: true,
    loop: true
  };

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

  inView(ele:any){
    ele.scrollIntoView({behavior:"smooth", block:"start", inline:"start"})
  }

  /**
   * Open modal
   * @param content content
   */
    openModal(content: any) {
      this.modalService.open(content, { size: 'lg',windowClass: 'modal-holder' });
      document.querySelector('.modal-content')?.classList.add('video-model');
    }


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

  onStateChange(event: any) {
    this.ytEvent = event.data;
  }
  savePlayer(player: any) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }

}
