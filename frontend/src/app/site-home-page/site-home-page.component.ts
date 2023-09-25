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

  // mobile navigation properties
  private navbar: HTMLElement | null = null;
  private navLinks: HTMLElement | null = null;
  private navBtn: HTMLElement | null = null;
  private navClose: HTMLElement | null = null;

  ngOnIt(): void {
    this.navbar = document.getElementById("navbar");
    this.navLinks = document.querySelector(".navbar__links");
    this.navBtn = document.getElementById("navbar__btn");
    this.navClose = document.getElementById("navbar__close");

    // mobile navbar event listeners
    if (this.navBtn && this.navClose) {
      this.navBtn.addEventListener("click", this.toggleMenu.bind(this));
      this.navClose.addEventListener("click", this.toggleMenu.bind(this));
    }
  }

  // function to toggle the menu visibility
  toggleMenu() {
    if (this.navbar && this.navBtn && this.navClose) {
      this.navbar.classList.toggle("show-menu");
      this.navBtn.classList.toggle("hide-icon");
      this.navClose.classList.toggle("show-icon");
    }
  }
}
