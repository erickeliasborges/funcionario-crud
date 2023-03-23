import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { EmployeeService } from '../../../employee.service';

@Component({
  selector: 'app-employee-maintenance',
  templateUrl: './employee-maintenance.component.html',
})
export class EmployeeMaintenanceComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private messageService: MessageService,
  ) {
    this.form = this.formCreate();
  }

  ngOnInit() {
    this.verifyCrudRouteParams();
  }

  private verifyCrudRouteParams() {
		const id = this.getParamId();

		if (id)
			this.loadRegister(Number(id));
		else
      this.resetForm();
	}

  private loadRegister(id: number) {
    this.employeeService.findById(id).subscribe({
      next: (value) => {
        this.form.reset(value)
      }
    })
  }

  private getParamId() {
    return this.getParam('id');
  }

  private getParam(name: string): string | null {
		return this.activateRoute.snapshot.paramMap.get(name);
	}

  private formCreate(): FormGroup {
    return this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      surname: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]],
      nis: [null]
    });
  }

  public get name(): AbstractControl {
    return this.form.get('name')!;
  }

  public get email(): AbstractControl {
    return this.form.get('email')!;
  }

  public get surname(): AbstractControl {
    return this.form.get('surname')!;
  }

  public get nis(): AbstractControl {
    return this.form.get('nis')!;
  }

  public onClickLimpar() {
    this.resetForm();
    this.router.navigateByUrl('maintenance');
  }

  public onClickVoltarPesquisa() {
    this.router.navigateByUrl('search');
  }

  public onSubmit() {
    if (this.form.invalid)
      return;

    this.employeeService.save(this.form.value).subscribe({
      next: () => {
        this.messageService.mostrarMensagem('Registro salvo com sucesso!');
        if (this.newEmployee())
          this.resetForm();
      },
      error: (error) => {
        console.log(error);
        this.messageService.mostrarMensagem(error.error.message || 'Erro ao salvar funcionário.');
      }
    })
  }

  public newEmployee() {
    return (!this.getParamId());
  }

  private resetForm() {
    this.form.reset();
  }

  public onClickExcluir(id: number) {
    this.employeeService.deleteById(id).subscribe({
      next: () => {
        this.messageService.mostrarMensagem('Registro excluído com sucesso!');
        this.resetForm();
      },
      error: (error) => {
        console.log(error);
        this.messageService.mostrarMensagem(error.error.message || 'Erro ao excluir funcionário.');
      }
    })
  }

}
