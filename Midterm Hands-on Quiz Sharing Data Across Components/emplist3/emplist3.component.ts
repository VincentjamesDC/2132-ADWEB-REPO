import { Component, OnInit } from '@angular/core';
import { EmpserveService } from '../empserve.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {
  employees:any;
  constructor(private employserv:EmpserveService) { }

  ngOnInit(): void {
    this.employees = this.employserv.employees();
  }

}