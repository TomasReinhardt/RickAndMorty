import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcharacterComponent } from './cardcharacter.component';

describe('CardcharacterComponent', () => {
  let component: CardcharacterComponent;
  let fixture: ComponentFixture<CardcharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
