import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OstaProfileComponent } from './osta-profile.component';

describe('OstaProfileComponent', () => {
  let component: OstaProfileComponent;
  let fixture: ComponentFixture<OstaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OstaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OstaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
