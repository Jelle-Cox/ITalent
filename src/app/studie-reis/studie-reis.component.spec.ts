import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudieReisComponent } from './studie-reis.component';

describe('StudieReisComponent', () => {
  let component: StudieReisComponent;
  let fixture: ComponentFixture<StudieReisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudieReisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudieReisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
