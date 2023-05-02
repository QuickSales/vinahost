import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',

})
export class SwitcherService {

  constructor() { }
  private emitChangeSource = new Subject<any>();
  public DirHtml = document.querySelector('html')?.getAttribute('dir') == 'rtl'
  changeEmitted = this.emitChangeSource.asObservable();
  emitChange(change: any){
    this.emitChangeSource.next(change);
  }

  private emitHoverChangeSource = new Subject<any>();
  changeHoverEmitted = this.emitHoverChangeSource.asObservable();
  emitHoverChange(change: any){
    this.emitHoverChangeSource.next(change);
  }

  DirectionsChangeRefresh(){
    this.DirHtml = document.querySelector('html')?.getAttribute('dir') == 'rtl'
    return this.DirHtml
  }



}
