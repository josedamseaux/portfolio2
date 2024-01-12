import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coolPipe',
  standalone: true
})
export class CoolPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
