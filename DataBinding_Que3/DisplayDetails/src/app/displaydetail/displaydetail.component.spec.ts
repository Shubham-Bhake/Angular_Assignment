import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaydetailComponent } from './displaydetail.component';

describe('DisplaydetailComponent', () => {
  let component: DisplaydetailComponent;
  let fixture: ComponentFixture<DisplaydetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaydetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaydetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
