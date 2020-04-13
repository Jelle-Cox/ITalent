import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareAthonComponent } from './care-athon.component';

describe('CareAthonComponent', () => {
  let component: CareAthonComponent;
  let fixture: ComponentFixture<CareAthonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareAthonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareAthonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
