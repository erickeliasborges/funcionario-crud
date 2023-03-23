import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from './employee';
import { TABLE_COLUMNS } from './employee-table-config';
import { EmployeeService } from './employee.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [
    EmployeeService
  ]
})
export class EmployeeComponent {

  constructor() {
  }

}
