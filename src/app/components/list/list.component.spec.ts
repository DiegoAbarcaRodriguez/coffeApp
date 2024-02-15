import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeService } from 'src/app/services/coffee.service';
import { Coffee } from 'src/app/interfaces/coffee.interface';
import { Observable, from, of } from 'rxjs';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;


  const coffees: Coffee[] = [{
    "id": "1",
    "name": "Cappuccino",
    "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
    "price": "$5.20",
    "rating": 4.7,
    "votes": 65,
    "popular": true,
    "available": true
  },
  {
    "id": "2",
    "name": "House Coffee",
    "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/house-coffee.jpg",
    "price": "$3.50",
    "rating": 4.85,
    "votes": 15,
    "popular": true,
    "available": true
  },
  {
    "id": "3",
    "name": "Espresso",
    "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg",
    "price": "$2.50",
    "rating": 4.9,
    "votes": 55,
    "popular": false,
    "available": true
  },
  ];



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListComponent],
      providers: [CoffeeService],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create ListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should show the coffees provided by the API', () => {
    const coffeeService = TestBed.inject(CoffeeService);

    spyOn(coffeeService, 'getCoffees').and.callFake(() => from([coffees]));
    component.ngOnInit();

    expect(component.coffees.length).toBeGreaterThanOrEqual(3);

  });

  it('Should change the value of mustShowAllCoffees based on the Observable coffeeService.onMustShowAllCoffees() to false', () => {
    const coffeeService = TestBed.inject(CoffeeService);

    spyOn(coffeeService, 'onMustShowAllCoffees').and.callFake(() => from(of(false)));
    component.ngOnInit();
    expect(component.mustShowAllCoffees).toBeFalsy();
  });

  it('Should be called the method getCoffees after executes coffeeService.onMustShowAllCoffees()', () => {
    const coffeeService = TestBed.inject(CoffeeService);

    spyOn(coffeeService, 'onMustShowAllCoffees').and.callFake(() => from(of(false)));
    const spy = spyOn(coffeeService, 'getCoffees').and.callFake(() => of());
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });




});
