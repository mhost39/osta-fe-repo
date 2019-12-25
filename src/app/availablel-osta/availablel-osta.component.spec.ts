import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablelOstaComponent } from './availablel-osta.component';

describe('AvailablelOstaComponent', () => {
  let component: AvailablelOstaComponent;
  let fixture: ComponentFixture<AvailablelOstaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablelOstaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablelOstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
