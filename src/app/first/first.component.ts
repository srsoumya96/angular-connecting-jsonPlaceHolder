import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AddCmpComponent } from '../add-cmp/add-cmp.component';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  
  constructor(private rs : RestService) { }
  emps;
  
  ngOnInit() {
    this.rs.getEmployees().subscribe(
      records =>{
        this.emps = records;
      });
  }
  showEmps = false;
  btnClick() {
    this.showEmps = true;
  }
  title="Angular App";
  color="green";

}