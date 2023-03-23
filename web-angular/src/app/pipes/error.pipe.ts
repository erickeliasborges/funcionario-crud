import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'error'
})
export class ErrorPipe implements PipeTransform {

  transform(value: any): any {
    if (!value)
      return null;

    if (value['required'])
      return 'Campo obrigatório';

    if (value['email'])
      return 'E-mail inválido';

    let minlength = value['minlength'];
    if (minlength)
      return `Deve possuir ao menos ${minlength.requiredLength} caracteres`;

    let maxlength = value['maxlength'];
    if (maxlength)
      return `Deve possuir no máximo ${maxlength.requiredLength} caracteres`;

    return null;
  }

}
