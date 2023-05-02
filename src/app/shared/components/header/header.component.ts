import { Component, HostListener } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Dropdown, Menu, NavService } from '../../services/nav.services';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public scrolled: boolean | unknown  = false;
  items!: Menu[];
  dropdownItems: any;
  menuItems:any;
  dropdownItemsSubscribe$!: Subscription;
  items2!: Dropdown[];
public windowSubscribe$!: Subscription;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 74;
  }

  constructor(
  public navServices: NavService,
  ){

  }

  ngOnInit(): void {
    this.navServices.items.subscribe((menuItems) => {
      this.items = menuItems;
    });
  
    const WindowResize = fromEvent(window, 'resize');
    this.windowSubscribe$ = WindowResize.subscribe(() => {

    });
  }
  toggleSidebar(type:any){

    // eslint-disable-next-line no-constant-condition
    if ((this.navServices.collapseSidebar = true)) {
      document.querySelector("html")?.setAttribute("toggled",type);
    }
}
  toggleDropdown(){

document.querySelector('.main-dropdown')?.classList.toggle('d-none');

  }

toggleNavActivedropdown(item: any) {
    if (!item.active) {
      this.dropdownItems.forEach((firstlevel: any) => {
        if (this.dropdownItems.includes(item)) {
          firstlevel.active = false;
        }
        // eslint-disable-next-line no-useless-return
        if (!firstlevel.children) return;

      });

    }
item.active=!item.active;

 }
  ngOnDestroy() {
    this.dropdownItemsSubscribe$.unsubscribe();
    // this.routerSubscription$.unsubscribe();
    this.windowSubscribe$.unsubscribe();
  }
  setNavActive(item: any) {
    this.dropdownItems.filter((dropdownItem:any) => {
      if (dropdownItem !== item) {
        dropdownItem.active = false;
       this.navServices.collapseSidebar = false;
      }
      if (dropdownItem.children && dropdownItem.children.includes(item)) {
        dropdownItem.active = true;
        document.querySelector('.main-dropdown')?.classList.toggle('d-none');
      }
      if (dropdownItem.children) {
        dropdownItem.children.filter((submenuItems: { children: string | any[]; active: boolean; }) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            dropdownItem.active = true;
            submenuItems.active = true;
            document.querySelector('.main-dropdown')?.classList.toggle('d-none');
          }
        });
      }
    });
  }

}
