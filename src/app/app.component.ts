import { Component, DoCheck } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'angprotest';

  isEven:boolean;
  date:any;
  time=setInterval(()=>{
    let hr =new Date().getHours();
     let min =new Date().getMinutes();
     let sec=new Date().getSeconds();
     if(sec%2==0){
       this.isEven=true;
       this.date=hr+":"+min+":"+sec;
     }else{
       this.isEven=false;
      this.date=hr+":"+min+":"+sec;
     }
   },300);
  ngDoCheck(){
    
  }





}
