import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Coffee } from 'src/app/interfaces/coffee.interface';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const coffee: Coffee = {
    "id": "3",
    "name": "Espresso",
    "image": "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/espresso.jpg",
    "price": "$2.50",
    "rating": 4.9,
    "votes": 55,
    "popular": false,
    "available": true
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.coffee = coffee;
    fixture.detectChanges();
  });

  it('should create CardComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Should display the coffee image in a tag <img>', () => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toBe(coffee.image);
  });

  it('Should display the text popular when the object coffee has the property popular = true', () => {

    component.coffee = {
      ...coffee,
      popular: true,
    }
    fixture.detectChanges();

    const tag = fixture.debugElement.query(By.css('.card__popular')).nativeElement;
    expect(tag).toBeTruthy();
  });

  it('Should not display the text popular when the object coffee has the property popular = false', () => {

    const tag = fixture.debugElement.query(By.css('.card__popular'))?.nativeElement;
    expect(tag).toBeFalsy();
  });

  it('Should display the coffee name in a p with class = card__title', () => {

    const tag = fixture.debugElement.query(By.css('.card__title')).nativeElement;
    expect(tag.textContent.trim()).toBe(coffee.name);
  });

  it('Should display image of filled start when coffee has rating property', () => {

    const tag = fixture.debugElement.query(By.css('.card__rating img')).nativeElement;
    expect(tag.src).toContain('/assets/images/Star_fill.svg');
  });

  it('Should display image of  start when coffee does not have rating property', () => {

    component.coffee = {
      ...coffee,
      rating: 0
    }
    
    fixture.detectChanges();

    const tag = fixture.debugElement.query(By.css('.card__rating img')).nativeElement;
    expect(tag.src).toContain('/assets/images/Star.svg');
  });


});
