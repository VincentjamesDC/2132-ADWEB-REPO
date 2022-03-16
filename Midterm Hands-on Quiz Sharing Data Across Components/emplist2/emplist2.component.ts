import { Component, OnInit } from '@angular/core';
import { EmpserveService } from '../empserve.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {
employees:any;
  constructor(private employserv:EmpserveService) { }

  ngOnInit(): void {
    this.employees = this.employserv.employees();
  }

}
