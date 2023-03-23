import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../employee';
import { TABLE_COLUMNS } from '../../../employee-table-config';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../employee.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
})
export class EmployeeSearchComponent implements OnInit {

  public employees: Employee[] = [];
  public columns: string[] = TABLE_COLUMNS;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  private loadAll() {
    this.employeeService.loadAll().subscribe({
      next: (value) => this.employees = value,
      error: (error) => {
        console.log(error);
        this.messageService.mostrarMensagem(error.error.message || 'Erro ao carregar funcionários.');
      }
    });
  }

  public onClickNovo() {
    this.router.navigateByUrl('maintenance');
  }

  public onClickEditar(id: number) {
    this.router.navigateByUrl(`maintenance/${id}`);
  }

  public onClickExcluir(id: number) {
    this.employeeService.deleteById(id).subscribe({
      next: () => {
        this.messageService.mostrarMensagem('Registro excluído com sucesso!');
        this.loadAll();
      },
      error: (error) => {
        console.log(error);
        this.messageService.mostrarMensagem(error.error.message || 'Erro ao excluir funcionário.');
      }
    })
  }

}
