import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeLeftPaneComponent } from './safe-left-pane.component';

describe('SafeLeftPaneComponent', () => {
  let component: SafeLeftPaneComponent;
  let fixture: ComponentFixture<SafeLeftPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeLeftPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeLeftPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
