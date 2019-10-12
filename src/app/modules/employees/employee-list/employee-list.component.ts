import { Employee } from './../../../model/employee.model';
import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.employeeService.getAllEmployees();
  }

  deleteEmp(id:number){
    this.employeeService.deleteEmployee(id).subscribe(
      (data:Employee)=>{
        this.getAllEmployee();
      }
      );
    }

    editEmp(emp){
      this.employeeService.currentEmployee=Object.assign({}, emp);
    }

}
