import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeCenterPaneComponent } from './safe-center-pane.component';

describe('SafeCenterPaneComponent', () => {
  let component: SafeCenterPaneComponent;
  let fixture: ComponentFixture<SafeCenterPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeCenterPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeCenterPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
