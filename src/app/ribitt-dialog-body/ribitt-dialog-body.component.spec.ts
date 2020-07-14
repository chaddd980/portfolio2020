import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibittDialogBodyComponent } from './ribitt-dialog-body.component';

describe('RibittDialogBodyComponent', () => {
  let component: RibittDialogBodyComponent;
  let fixture: ComponentFixture<RibittDialogBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibittDialogBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibittDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
