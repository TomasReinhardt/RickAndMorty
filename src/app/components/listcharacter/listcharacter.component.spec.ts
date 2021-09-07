import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcharacterComponent } from './listcharacter.component';

describe('ListcharacterComponent', () => {
  let component: ListcharacterComponent;
  let fixture: ComponentFixture<ListcharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
