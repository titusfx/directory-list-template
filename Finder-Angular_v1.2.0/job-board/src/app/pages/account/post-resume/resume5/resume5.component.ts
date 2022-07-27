import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume5',
  templateUrl: './resume5.component.html',
  styleUrls: ['./resume5.component.scss']
})

/**
 * Resume5 Component
 */
export class Resume5Component implements OnInit {

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
