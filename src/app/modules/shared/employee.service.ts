import { Employee } from './../../model/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = "http://localhost:3000/employees";
  allEmployee: Employee[];

  currentEmployee: Employee = {
    id:null,
    firstName : '',
    lastName : '',
    designation : '',
    contact : '',
    address : ''

  };
  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get(this.baseUrl).subscribe(
      (data: Employee[]) => {
        this.allEmployee = data;
});
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete(this.baseUrl + '/' + id, headerOptions);
  }

  saveEmp(emp:Employee): Observable<Employee>{
    return this.http.post(this.baseUrl, emp, headerOptions);
  }

  updateEmp(emp:Employee): Observable<Employee>{
    return this.http.put(this.baseUrl+'/'+emp.id, emp, headerOptions);
  }

}
