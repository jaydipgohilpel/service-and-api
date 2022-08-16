import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalserviceComponent } from './localservice.component';

describe('LocalserviceComponent', () => {
  let component: LocalserviceComponent;
  let fixture: ComponentFixture<LocalserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
