import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume1',
  templateUrl: './resume1.component.html',
  styleUrls: ['./resume1.component.scss']
})

/**
 * Resume1 Component
 */
export class Resume1Component implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  public socialColleaps = true;

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
