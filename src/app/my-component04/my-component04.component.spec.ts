import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent04Component } from './my-component04.component';

describe('MyComponent04Component', () => {
  let component: MyComponent04Component;
  let fixture: ComponentFixture<MyComponent04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
