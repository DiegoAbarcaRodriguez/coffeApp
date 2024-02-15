import { Coffee } from './../../interfaces/coffee.interface';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { CoffeeService } from 'src/app/services/coffee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  mustShowAllCoffees: boolean = true;
  coffees: Coffee[] = []


  constructor(private coffeeService: CoffeeService) { }

  ngOnInit(): void {
    this.getCoffees();
    this.onMustShowAllcoffees();
  }


  private onMustShowAllcoffees() {
    this.coffeeService.onMustShowAllCoffees().subscribe((resp) => {
      this.mustShowAllCoffees = resp;
      this.getCoffees();
    });
  }


  private getCoffees() {
    this.coffeeService.getCoffees().pipe(
      map((coffees) => {
        if (!this.mustShowAllCoffees) {
          return coffees.filter(coffee => coffee.available)
        }
        return coffees;
      })
    ).subscribe((coffees) => { this.coffees = coffees })
  }

}
