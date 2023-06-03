import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent05Component } from './my-component05.component';

describe('MyComponent05Component', () => {
  let component: MyComponent05Component;
  let fixture: ComponentFixture<MyComponent05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent05Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
