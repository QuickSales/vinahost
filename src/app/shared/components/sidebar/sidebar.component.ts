import {
  Component,
  ViewEncapsulation,
  HostListener,
  ElementRef,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {  NavService } from 'src/app/shared/services/nav.services';
import {  fromEvent, Subscription } from 'rxjs';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  public menuItems:any;
  public url: any;

  public windowSubscribe$!: Subscription;
  public routerSubscription$!: Subscription;
  public menuitemsSubscribe$!: Subscription;
  public scrolled: boolean | unknown = false;
  sidenav: any;
  widthBreakpoint!: number;
  collapsedMenuState!: boolean;
  windowSize: any;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 74;
  }
  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private navServices: NavService,
    public elRef: ElementRef,
    // public productdetailsService: ProductdetailsService
  ) {
 }

  mobilet()
{
  document.querySelectorAll(".side-menu__item").forEach((ele)=>{
    console.log(ele);
  });
}
  public user!: { id: number };
  ngOnInit() {

    this.menuitemsSubscribe$ = this.navServices.items.subscribe(
      (items) => {
        this.menuItems = items;
      }
    );

    const WindowResize = fromEvent(window, 'resize');
    // subscribing the Observable
    this.windowSubscribe$ = WindowResize.subscribe(() => {

    });
    this.checkCurrentPath(location.pathname);
    this.routerSubscription$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (document.body.classList.contains('horizontal')) {
          this.closeNavActive();
        } else {
          this.checkCurrentPath(event.url);
        }
      }
    });
    this.breakpointObserver
    .observe(['(max-width: 992px)'])
    .subscribe((result: BreakpointState) => {
      if (result.matches) {
        // small screen
        this.checkCurrentPath(location.pathname);

            } else {
        // large screen
document.querySelector("html")?.setAttribute("toggled","close");
      }
    });

  }
  closeNavActive() {
    this.menuItems.filter((main: { active: boolean; children: any[]; }) => {
      main.active = false;
      if (main.children) {
        main.children.filter((secondlevel: { active: boolean; children: any[]; }) => {
          secondlevel.active = false;
          if (secondlevel.children) {
            secondlevel.children.filter((thirdlevel: { active: boolean; children: any[]; }) => {
              thirdlevel.active = false;
              if (thirdlevel.children) {
                thirdlevel.children.filter((fourthlevel: { active: boolean; }) => {
                  fourthlevel.active = false;
                });
              }
            });
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this.menuitemsSubscribe$.unsubscribe();
    // this.routerSubscription$.unsubscribe();
    this.windowSubscribe$.unsubscribe();
  }

 sidebarClose(type:any) {
    if ((this.navServices.collapseSidebar == true)) {
      document.querySelector('html')?.setAttribute('toggled',type);
      this.navServices.collapseSidebar = false;
    }
  }

  toggleNavActive(item: any) {
    if (!item.active) {
      this.menuItems.forEach((firstlevel: any) => {
        if (this.menuItems.includes(item)) {
          firstlevel.active = false;
        }

        if (!firstlevel.children) return;
 });
    }
item.active=!item.active;
document.querySelector("html")?.setAttribute("toggled","close");
  }

checkCurrentPath(event: any) {
    this.menuItems.filter((firstLevel: { path: any; children: any[]; }) => {
      if (firstLevel.path === event) {
        this.setNavActive(event);
      }
      if (!firstLevel.children) {
        return;
      }
      firstLevel.children.filter((secondlevel: { path: any; items: any[]; children: any[]; }) => {
     if (secondlevel.path === event) {
          this.setNavActive(secondlevel);
        }
        if(secondlevel.items){
          secondlevel.items.filter((secondlevelitem: { path: any; }) => {
            if (secondlevelitem.path === event) {
              this.setNavActive(secondlevelitem);
            }
          });
        }
        if (!secondlevel.children) {
          return;
        }
        secondlevel.children.filter((thirdlevel: { path: any; children: any[]; }) => {
          if (thirdlevel.path === event) {
            this.setNavActive(thirdlevel);
          }
          if (!thirdlevel.children) {
            return;
          }
          thirdlevel.children.filter((fourthlevel: { path: any; }) => {
            if (fourthlevel.path === event) {
              this.setNavActive(fourthlevel);
            }
          });
        });
      });
    });
  }
  //Active Nav State

setNavActive(item: any) {
    this.menuItems.filter((firstlayer:any) => {

      if (firstlayer !== item) {
        firstlayer.active = false;
        firstlayer.selected = false;
        this.navServices.collapseSidebar=false;
        document.querySelector("html")?.setAttribute("toggled","close");

      }
      if (firstlayer.children && firstlayer.children.includes(item)) {
        firstlayer.active = true;
        firstlayer.selected = true;
        document.querySelector("html")?.setAttribute("toggled","close");
      }
      if (firstlayer.children) {
        firstlayer.children.filter((secondlevel:any) => {
          if (secondlevel !== item) {
            secondlevel.active = false;
            secondlevel.selected = false;
          }
          if (secondlevel.children && secondlevel.children.includes(item)) {
            firstlayer.active = true;
            firstlayer.selected = true;
            secondlevel.active = true;
            secondlevel.selected = true;
        document.querySelector("html")?.setAttribute("toggled","close");

          }

          if(secondlevel.items){
            secondlevel.items.filter((secondlevelitems:any) => {
              if (secondlevelitems && secondlevel.items.includes(item)) {

                firstlayer.active = true;
                firstlayer.selected = true;
                secondlevelitems.active = true;
                secondlevelitems.selected = true;
                document.querySelector("html")?.setAttribute("toggled","close");
              }

            });
          }
          if (secondlevel.children) {
            secondlevel.children.filter((thirdlevel:any) => {
              if (thirdlevel !== item) {
                thirdlevel.active = false;
                thirdlevel.selected = false;
              }
              if (thirdlevel.children && thirdlevel.children.includes(item)) {
                firstlayer.active = true;
                firstlayer.selected = true;
                secondlevel.active = true;
                secondlevel.selected = true;
                thirdlevel.active = true;
                thirdlevel.selected = true;
                document.querySelector("html")?.setAttribute("toggled","close");
              }

            });
          }
        });
      }
    });
  }

}
