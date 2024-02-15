import { Component } from '@angular/core';
import { CoffeeService } from './services/coffee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coffeApp';

  mustShowAllCoffees: boolean = true;

  constructor(private coffeeService:CoffeeService){}

  onChangeMustShowAllCoffees(value:boolean) {
    this.mustShowAllCoffees=value;
    this.coffeeService.mustShowAllCoffees.next(value);
  }


}
