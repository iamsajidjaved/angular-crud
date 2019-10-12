import { Employee } from './../../../model/employee.model';
import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }

  updateOrSave(emp:Employee){
      if(emp.id!=null){
        this.updateEmp(emp);
      }else{
        this.saveEmp(emp);
      }
  }

  updateEmp(emp){
    this.employeeService.updateEmp(emp).subscribe();
  }

  saveEmp(emp){
    this.employeeService.saveEmp(emp).subscribe();
  }

}
