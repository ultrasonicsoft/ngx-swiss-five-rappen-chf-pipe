import { Pipe, PipeTransform } from '@angular/core';

/*
This is an Angular pipe for  roudning of CHF decimal currency as per the rules defined in README.

Author: Balram Chavan (ultrasonicsoft)
*/

@Pipe({
  name: 'ngxSwissFiveRappenChf'
})
export class NgxSwissFiveRappenChfPipe implements PipeTransform {

  transform(value: number): number {
    if (value) {
      const result = (Math.round(value * 20) / 20).toFixed(2);
      return parseFloat(result);
    }
    return 0;
  }

}
