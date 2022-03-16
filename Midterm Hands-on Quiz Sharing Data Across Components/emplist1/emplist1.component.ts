import { Component, OnInit } from '@angular/core';
import { EmpserveService } from '../empserve.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {
employees:any;
  constructor(private employserv:EmpserveService) { }

  ngOnInit(): void {
    this.employees = this.employserv.employees();
  }

}
