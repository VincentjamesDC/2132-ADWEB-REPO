import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MT1_Products_Routing';
  todaydate:any;
  componentproperty:any;
  constructor(private myservice:MyserviceService){}
  ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();
    console.log(this.myservice.serviceproperty);
    this.myservice.serviceproperty = "component created";
    this.componentproperty = this.componentproperty.myservice.serviceproperty;
  }
}
