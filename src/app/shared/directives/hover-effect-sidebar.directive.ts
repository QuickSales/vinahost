/* eslint-disable linebreak-style */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  // eslint-disable-next-line linebreak-style
  selector: '[appHoverEffectSidebar]'
})
export class HoverEffectSidebarDirective {
  constructor(private eleRef: ElementRef, private render: Renderer2){}

  @HostListener('mouseover') onHover() {
    if (window.innerWidth > 768) {
      document.querySelector("html")?.setAttribute("toggled","close");

    }
  }
  @HostListener('mouseleave') onLeave() {
    if (window.innerWidth > 768) {
      document.querySelector("html")?.setAttribute("toggled","close");

    }
  }
}
