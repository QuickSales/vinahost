/* eslint-disable linebreak-style */
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidemenuToggle]'
})
export class SidemenuToggleDirective {

  private html = document.querySelector('html');
  constructor() { }

  @HostListener('click') toggleSidemenu(){
    // if(this.html?.getAttribute("toggled") == 'open'){

    // }
    if (this.html?.classList.contains('toggled')) {
      document.querySelector('html')?.classList.remove('open');
    }else{
      document.querySelector('htnl')?.classList.add('close');
    }

  }
}
