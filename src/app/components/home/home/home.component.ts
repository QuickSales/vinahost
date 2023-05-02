import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  indexNumber = 1;
  slidesPerView!: 3;

  thumbsSwiper: unknown;

    setThumbsSwiper(swiper: unknown) {
      this.thumbsSwiper = swiper;
    }
    breakpoints = {
      640: { slidesPerView: 2, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 40 },
      1024: { slidesPerView: 4, spaceBetween: 50 },
    };

    breakPointsToggle!: boolean;
    breakpointChange() {
      this.breakPointsToggle = !this.breakPointsToggle;
      this.breakpoints = {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1024: { slidesPerView: this.breakPointsToggle ? 7 : 5, spaceBetween: 50 },
      };
    }

  slidesStore = [
    {
      id:"1",
      src: "./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:"Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation.",

    },
    {
      id:"2",
      src:"./assets/images/profile/3.jpg",
      name:"Navin Telsko",
      date:"12 Aug, 2022",
      text:"Consetetur diam voluptua justo eirmod sed dolor. Ipsum amet clita ut nonumy justo, dolore et dolor dolor clita dolor justo Lorem sanctus ipsum sea sit"

    },
    {
      id:"3",
      src:"./assets/images/profile/2.jpg",
      name:"Mosh",
      date:"16 Apr, 2022",
      text:"Tempor diam sed vero sed nonumy sed lorem gubergren amet. No no consetetur at duo duo sed et lorem dolor. Sea kasd gubergren voluptua lorem."
    },
    {
      id:"4",
      src: "./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:" Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation."
    },
    {
      id:"5",
      src:"./assets/images/profile/1.jpg",
      name:"Dhaval Patel",
      date:"12 Aug, 2022",
      text:" Efficiently innovate customized growth strategies whereas error-free paradigms. Monotonectally enhance stand-alone data with prospective innovation."
    },

  ];

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  scrolled: boolean | unknown = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 10;

  }
}
