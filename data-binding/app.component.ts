import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = 'this is a one way data binding sample from the discussion!';
  appName1 = '1. One-way data Binding (Interpolation)';
  appName2 = 'a. Number/String Binding:';
  appName3 = 'b. Style Binding:';
  appName4 = 'c. Property Binding:';
  appName5 = 'd. Class Binding:';
 

//numeric
  nd1 = 100;
  nd2 = 200;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;
//string
  fname = 'Vincent James';
  miname = 'G.';
  lname = 'Dela Cruz';
//property/style/class
  clientName = "Vincent James Dela Cruz";
  appliedCSSClass = "green";
  notappliedCSSClass = "true";
  myColor = "Cyan";
  myColor1 = "red";
  myColor2 = "Blue";
  myColor3 = "Purple";
  myColor4 = "teal";  

//Two-way data binding:
nameApp = '2. Two-way data binding:';
nameApp1 = ''
showData($event:any){
  console.log("Button is Clicked!");
  
}
//keyup function
getData(data:any){
  console.warn(data)
}
}
