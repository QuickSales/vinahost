import { Component, HostListener } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-a-domain',
  templateUrl: './register-a-domain.component.html',
  styleUrls: ['./register-a-domain.component.scss'],
  providers: [NgbAccordionConfig],
})
export class RegisterADomainComponent {
  keyfields!:string;
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';

  }
  keyfield=[
    {
    name:".com",
    status:"Newest",
    price:"$567.98",
    year:"1 Year",
    price1:"$567.98",
    year1:"1 Year",
    price2:"$567.98",
    year2:"1 Yea",
    buy:"Buy Now",
    expanded:"",
    }
  ];
  toggle(){

  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
