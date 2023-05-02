
import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { CookieComponent } from './components/cookie/cookie.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ToggleThemeDirective } from './directives/toggle-theme.directive';
import { SidemenuToggleDirective } from './directives/sidemenuToggle';
import { SwitcherLayoutComponent } from './layouts/switcher-layout/switcher-layout.component';
import { TabToTopComponent } from './components/tab-to-top/tab-to-top.component';
@NgModule({
  declarations:[HeaderComponent,FullLayoutComponent,SidebarComponent,SidemenuToggleDirective,SwitcherLayoutComponent, FooterComponent,CookieComponent,
     SwitcherComponent,
     TabToTopComponent,
     ToggleThemeDirective,
       ],

  imports: [CommonModule,RouterModule,NgbModule,NgbDropdownModule,ColorPickerModule],
  exports:[FullLayoutComponent,SidemenuToggleDirective]
}
)
export class SharedModule { }

