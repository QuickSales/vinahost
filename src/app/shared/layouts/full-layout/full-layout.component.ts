import { Component } from '@angular/core';
import { SwitcherService } from 'src/app/shared/services/switcher.service';
import { NavService } from '../../services/nav.services';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss']
})
export class FullLayoutComponent {

  constructor(
    public SwitcherService: SwitcherService,
    private navServices: NavService,
  ) {

  }

  toggleSwitcherBody() {
    this.SwitcherService.emitChange(false);

  }
  ngOnDestroy(){
    location.reload();
  }
  sidebarClose(type:any) {
    if ((this.navServices.collapseSidebar == true)) {
      document.querySelector('html')?.setAttribute('toggled',type);
      this.navServices.collapseSidebar = false;
    }
  }
 
}

