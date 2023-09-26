import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-site-home-page',
  templateUrl: './site-home-page.component.html',
  styleUrls: ['./site-home-page.component.scss']
})
export class SiteHomePageComponent {
  activeTab: string = 'add';
  isMobile: boolean = true; // Default to mobile

  showTab(tabName: string) {
    this.activeTab = tabName;
  }

  // MOBILE NAVIGATION MENU/BUTTON TOGGLING
  private navbar: HTMLElement | null = null;
  @ViewChild('navbarBtn') navbarBtn!: ElementRef;
  @ViewChild('navbarClose') navbarClose!: ElementRef;
  isMenuOpen = false;

  ngOnInit(): void {
    this.navbar = document.getElementById("navbar");
    
   // Initial check for screen width
   this.checkScreenWidth(window.innerWidth);
  }

  // function to toggle the menu visibility
  toggleMenu() {
    if (this.navbar) {
        this.isMenuOpen = !this.isMenuOpen;
        if (this.isMenuOpen) {
            this.navbar.classList.add("show-menu");
            this.navbar.classList.remove("close-menu");
        } else {
            this.navbar.classList.add("close-menu");
            this.navbar.classList.remove("show-menu");
        }
    }
  }

  // Function to check screen width and update isMobile
  checkScreenWidth(width: number) {
    // Update isMobile based on the screen width
    this.isMobile = width < 944; // Adjust the breakpoint as needed
  }
}
