import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeOstaComponent } from './be-osta.component';

describe('BeOstaComponent', () => {
  let component: BeOstaComponent;
  let fixture: ComponentFixture<BeOstaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeOstaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeOstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
