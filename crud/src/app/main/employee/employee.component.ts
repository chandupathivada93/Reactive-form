import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  departments = [
    {id: 1, name: 'angular'},
    {id: 1, name: 'React'},
    {id: 1, name: 'Node'},
    {id: 1, name: 'Bootstrap'},
    {id: 1, name: 'Firebase'}
  ]

  constructor(public empService: EmployeeService) { }

  ngOnInit(): void {
  }


}
