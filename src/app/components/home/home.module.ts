import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [

CommonModule,
    HomeRoutingModule,
    NgbModule,
    NgbCarousel,
    SwiperModule
 ],

})
export class HomeModule { }
