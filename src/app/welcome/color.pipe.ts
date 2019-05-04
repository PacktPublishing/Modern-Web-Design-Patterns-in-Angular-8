import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
  pure: false
})
export class ColorPipe implements PipeTransform {

  transform(cars: any, carColor?: string): any {
    console.log(carColor);
    if (!carColor) {
      return cars;
    }
    return cars.filter(car => car.color.includes(carColor));
  }

}
