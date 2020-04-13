import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vpw2019Component } from './vpw2019.component';

describe('Vpw2019Component', () => {
  let component: Vpw2019Component;
  let fixture: ComponentFixture<Vpw2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vpw2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vpw2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
