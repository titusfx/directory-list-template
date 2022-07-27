import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume2',
  templateUrl: './resume2.component.html',
  styleUrls: ['./resume2.component.scss']
})

/**
 * Resume2 Component
 */
export class Resume2Component implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Post resume', active: true }
    ];

     // Header Class Added
     document.querySelector('.navbar')?.classList.add('bg-dark');

     // Body Class Added
     document.body.classList.add('bg-secondary');
  }

}
