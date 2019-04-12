import { WINDOW } from '@ng-toolkit/universal';
import { Component, OnInit, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  scrolled: boolean = false;
  awake: boolean = false;
  display: boolean = false;
  logo: string = '/assets/images/logo.png';

  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (isPlatformBrowser(this.platformId)) {
          this.scrolled = this.window.scrollY > 60;
          this.awake = this.window.scrollY > 100;
          if (this.window.scrollY > 100) {
              this.logo = '/assets/images/logo.png';
              this.display = true;
          } else {
              this.logo = '/assets/images/logo.png';
              this.display = false;
          }
      }
  }

  scrollTop() {
    this.window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  collapsed = true;
   toggleCollapsed(): void {
     this.collapsed = !this.collapsed;
   }

  constructor(@Inject(WINDOW) private window: Window, @Inject(PLATFORM_ID) public platformId: string, private router: Router) { }

  ngOnInit() {
      this.router.events
          .subscribe(() => {
            this.collapsed = true;
          });
  }

}
