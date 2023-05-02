import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {   NgbModal, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import * as switcher from './switcher';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss'],
})
export class SwitcherComponent implements OnInit {
  closeResult = '';
  html = document.querySelector('html');
  color1 = "#1457e6";
  public localDark = localStorage;
  public localRtl = localStorage;
  public localBoxed = localStorage;
  @ViewChild('switcher', { static: false }) switcher!: ElementRef;
  // carouselRef: any;

  constructor(private offcanvasService: NgbOffcanvas,
    private modalService: NgbModal)
   {
    this.localbackup();

  }
  ngOnInit(): void {

  }
  open(content: any) {
    // let session: any = document.querySelector("html")?.getAttribute('dir') == 'rtl' ? { ariaLabelledBy: 'offcanvas-basic-title' } : { position: 'end' }
    document.querySelectorAll("ngb-offcanvas-panel").forEach((element)=>{
      element.remove();
    });
    document.querySelectorAll("ngb-offcanvas-backdrop").forEach((element)=>{
      element.remove();
    });
    this.offcanvasService.open(content,{ position: 'end' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  openModal(content1: any) {
    this.modalService.open(content1, { modalDialogClass:'buynow', ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }
  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  themeChange(type: any) {
    document.querySelector("html")?.setAttribute("data-theme-mode", type);
    localStorage.setItem("hostma-theme-mode", type);

  }

  DirectionsChange(type: any) {
    document.querySelector("html")?.setAttribute("dir", type);
    localStorage.setItem("hostma-dir-mode", type);
    if (type == 'rtl') {
      const styleId = document.querySelector('#style');
      styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.rtl.min.css');
      // console.log("rtl")
    }
    else {
      const styleId = document.querySelector('#style');

      styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.min.css');
    }

    if(type == 'rtl'){
      document.getElementById("switcher-rtl");
      const rtl = document.getElementById("switcher-rtl") as HTMLInputElement;
      rtl.checked = true;
      this.localRtl=localStorage;
    }

    //  this.carouselRef()
  }
  widthChange(type: any) {
    document.querySelector("html")?.setAttribute("data-width", type);
    localStorage.setItem("hostma-width-mode", type);

  }
  Primary(type: any) {
    document.querySelector("html")?.setAttribute("style", type);
    localStorage.setItem("hostma-primary-mode", type);

  }

  Primary1(type: any) {
    document.querySelector("html")?.setAttribute("style", type);
    localStorage.setItem("hostma-primary-mode", type);
    }

  background(type: any, event: any) {
    document.querySelector("html")?.setAttribute("style", type);
    localStorage.setItem("hostma-background-mode", type);
    document.querySelector("html")?.setAttribute("data-theme-mode", event);
    localStorage.setItem("hostma-theme-mode", event);
  }

  mychange(event: any, type: any) {
    console.log(event.color);

    const changechange = event.color;
    switcher.dynamicDarkBodyColor(changechange, document.querySelector("html"));
    document.querySelector("html")?.setAttribute("data-theme-mode", type);
    localStorage.setItem("hostma-theme-mode", type);
  }

  public dynamicDarkBg(event: any, type: any) {
    console.log(event.color);
    const dynamicBodyDark = event.color;
    switcher.dynamicDarkColor(dynamicBodyDark, document.querySelector("html"));

    document.querySelector("html")?.setAttribute("data-theme-mode", type);
    localStorage.setItem("hostma-theme-mode", type);

  }
  localbackup() {
    if (localStorage.getItem("hostma-theme-mode")) {
      const type: any = localStorage.getItem("hostma-theme-mode");
      document.querySelector("html")?.setAttribute("data-theme-mode", type);

    }

    if (localStorage.getItem("hostma-dir-mode")) {
      const type: any = localStorage.getItem("hostma-dir-mode");
      document.querySelector("html")?.setAttribute("dir", type);
      if (type == 'rtl') {
        const styleId = document.querySelector('#style');
        styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.rtl.min.css');
        console.log("rtl");
      }
      else {
        const styleId = document.querySelector('#style');

        styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.min.css');
      }

    }
    if (localStorage.getItem("hostma-width-mode")) {
      const type: any = localStorage.getItem("hostma-width-mode");
      document.querySelector("html")?.setAttribute("data-width", type);

    }
    if (localStorage.getItem("hostma-background-mode")) {
      const type: any = localStorage.getItem("hostma-background-mode");
      document.querySelector("html")?.setAttribute("style", type);
    }
    if (localStorage.getItem("hostma-primary-mode")) {
      const type: any = localStorage.getItem("hostma-primary-mode");
      document.querySelector("html")?.setAttribute("style", type);
    }
    if (localStorage.getItem("hostmabg-color")) {
      const event: any = localStorage.getItem("hostmabg-color");
      document.querySelector("html")?.setAttribute("style", event);
      localStorage.getItem(event.color);

    }

  }

  reset(){
 const light = document.getElementById('switcher-light-theme') as HTMLInputElement;
    light.checked = true;

    const ltr = document.getElementById('switcher-ltr') as HTMLInputElement;
    ltr.checked = true;
    document.querySelector("html")?.setAttribute("data-width","full-width");
    localStorage.setItem("hostma-width-mode", "full-width");
    const fullwidth = document.getElementById('switcher-full-width') as HTMLInputElement;
    fullwidth.checked = true;

    localStorage.clear();
    const html:any = document.querySelector('html');

    html.style = '';
    html?.classList.remove('switcher-rtl');
    html?.classList.remove('switcher-dark-theme');
    html?.classList.remove('switcher-boxed');

    html.setAttribute('dir', 'ltr');
    const styleId = document.querySelector('#style');
    styleId?.setAttribute('href', './assets/libs/bootstrap/css/bootstrap.min.css');

    switcher.checkOptions();
  }

}
