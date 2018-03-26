import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafemodeComponent } from './safemode.component';

describe('SafemodeComponent', () => {
  let component: SafemodeComponent;
  let fixture: ComponentFixture<SafemodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafemodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
