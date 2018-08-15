import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersigninsComponent } from './othersignins.component';

describe('OthersigninsComponent', () => {
  let component: OthersigninsComponent;
  let fixture: ComponentFixture<OthersigninsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersigninsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersigninsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
