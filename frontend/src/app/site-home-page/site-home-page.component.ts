import { Component } from '@angular/core';

@Component({
  selector: 'app-site-home-page',
  templateUrl: './site-home-page.component.html',
  styleUrls: ['./site-home-page.component.scss']
})
export class SiteHomePageComponent {
  activeTab: string = 'add';

  showTab(tabName: string) {
    this.activeTab = tabName;
  }
}
