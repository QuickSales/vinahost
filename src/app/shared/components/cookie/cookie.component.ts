import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss']
})
export class CookieComponent {
  public cookie = !localStorage.getItem('cookieAccepted');
  cookieAccepted(){
    localStorage.setItem('cookieAccepted',"true");
    document.querySelector("#cookieNotice")?.remove();
  }
}
