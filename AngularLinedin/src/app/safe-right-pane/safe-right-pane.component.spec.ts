import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeRightPaneComponent } from './safe-right-pane.component';

describe('SafeRightPaneComponent', () => {
  let component: SafeRightPaneComponent;
  let fixture: ComponentFixture<SafeRightPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeRightPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeRightPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
