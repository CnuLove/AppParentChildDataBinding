import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID, signal } from '@angular/core';

import {isPlatformBrowser} from "@angular/common";
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{

  // @Input() countervalue:any;
  // @Output() CounterClick= new EventEmitter<any>();
  // Submit(){
  //   this.CounterClick.emit(this.countervalue);
  // }
  isBrowser = signal(false); 
constructor(@Inject(PLATFORM_ID) platformId: object){
  this.isBrowser.set(isPlatformBrowser(platformId));
}
  @Input() CounterValue:any;
  @Output() CounterValueChange= new EventEmitter();
  
  ngOnInit() {
    window.setInterval(()=>{
      //this.CounterValue=this.CounterValue+1;
    },1000);
  }
}
