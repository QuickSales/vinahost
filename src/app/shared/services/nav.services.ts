/* eslint-disable linebreak-style */
import { Injectable, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, fromEvent } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

// Menu
export interface Menu {
titledescription: any;
menutitle: any;
bgcolor: any;
	headTitle?: string,
	headTitle2?: string,
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeValue?: string;
	badgeClass? :string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
	Menusub?: boolean;
	target?:boolean;
  selected?: boolean;
  items?: any;
}
export interface Dropdown {
  titledescription: any;
  menutitle: any;
  bgcolor: any;
    headTitle?: string,
    headTitle2?: string,
    path?: string;
    title?: string;
    icon?: string;
    menuicon?: string;
    type?: string;
    badgeValue?: string;
    badgeClass? :string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
    Menusub?: boolean;
    target?:boolean;
    selected?: boolean;
    items1? : any;
  }

@Injectable({
	providedIn: 'root'
})

export class NavService implements OnDestroy {

	private unsubscriber: Subject<any> = new Subject();
	public  screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

	// Search Box
	public search = false;

	// Language
	public language = false;

	// Mega Menu
	// public megaMenu: boolean = false;
	// public levelMenu: boolean = false;
	// public megaMenuColapse: boolean = window.innerWidth < 1199 ? true : false;

	// Collapse Sidebar
	public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
// eslint-disable-next-line linebreak-style

	// For Horizontal Layout Mobile
	public horizontal: boolean = window.innerWidth < 991 ? false : true;

	// Full screen
	public fullScreen = false;
  items1: any;
  sanitizer: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
  }

	ngOnDestroy() {
		this.unsubscriber.next;
		this.unsubscriber.complete();
	}

	private setScreenWidth(width: number): void {
		this.screenWidth.next(width);
	}

	MENUITEMS: any = [
    {
      title: "Home",
      type: "sub",
      active: false,
      selected: false,
      children: [
        {
          path: '/home/home',
          type: "link",
          active: true,
          selected: true,
          icon: "bi-house",
          title: "Home",
        },
      
      ],
    },
    ///////////2459
    {
      title: "Domains",
      type: "mega-slide",
      active: false,
      selected: false,
      Menusub: true,

      children: [
        {
          children: [
            {
              menutitle: "Registration",
              menuicon:"bi-journal-text ",
              path: '/domains/register-a-domain',
              icon: "bi-hdd-stack",
              type: "mega-menu",
              active: false,
              selected: false,
              bgcolor: "secondary",
              bgcolor1: "secondary",
              title: "Register a Domain",
              titledescription: "Book your domain here",
            },
            {
              path: '/domains/new-domain-extensions',
              icon: "bi bi-plus-circle me-0 tx-success",
              type: "link",
              bgcolor: "success",
             bgcolor1: "success",
              active: false,
              selected: false,
              title: "New Domain Extensions",
              titledescription: "pr-erigester to new domain extensions",
            },

          ],
        },

      ],
    },

  ];

	// Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
