import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume3',
  templateUrl: './resume3.component.html',
  styleUrls: ['./resume3.component.scss']
})

/**
 * Resume3 Component
 */
export class Resume3Component implements OnInit {

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
