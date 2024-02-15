import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoffeeService } from './services/coffee.service';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

import { Observable, from } from 'rxjs';



describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [
      HttpClientModule,
      ComponentsModule
    ],
    providers: [
      CoffeeService
    ]
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should show the legend: "Our Collection" in a h1', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1.innerHTML).toBe('Our Collection');
  });

  it('Should change the flag "mustShowAllCoffees" to true ', () => {

    const button = fixture.debugElement.query(By.css('.navbar__element'));
    button.triggerEventHandler('click');

    expect(component.mustShowAllCoffees).toBeTruthy();


  });

  it('Should change the flag "mustShowAllCoffees" to false ', () => {

    const button = fixture.debugElement.queryAll(By.css('.navbar__element'));
    button[1].triggerEventHandler('click');

    expect(component.mustShowAllCoffees).toBeFalsy();


  });

  it('Should emit value of the flag from the property "mustShowAllCoffees" of the coffeService', () => {

    const coffeeService: CoffeeService = TestBed.get(CoffeeService);
    const spy = spyOnProperty(coffeeService, 'mustShowAllCoffees');

    const button = fixture.debugElement.query(By.css('.navbar__element'));
    button.triggerEventHandler('click');

    expect(spy).toHaveBeenCalled();


  });



});
