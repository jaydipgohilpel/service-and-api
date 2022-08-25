import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableSubComponent } from './observable-sub.component';

describe('ObservableSubComponent', () => {
  let component: ObservableSubComponent;
  let fixture: ComponentFixture<ObservableSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
