import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponent03Component } from './my-component03.component';

describe('MyComponent03Component', () => {
  let component: MyComponent03Component;
  let fixture: ComponentFixture<MyComponent03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponent03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponent03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
