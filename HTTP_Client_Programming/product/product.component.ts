import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  todaydate:any;
  constructor(private myservice:MyserviceService) {}

  ngOnInit(): void {
    this.todaydate = this.myservice.showTodayDate()
  }

}
