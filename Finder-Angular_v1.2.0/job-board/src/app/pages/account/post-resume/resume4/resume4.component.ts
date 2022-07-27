import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume4',
  templateUrl: './resume4.component.html',
  styleUrls: ['./resume4.component.scss']
})

/**
 * Resume4 Component
 */
export class Resume4Component implements OnInit {

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
