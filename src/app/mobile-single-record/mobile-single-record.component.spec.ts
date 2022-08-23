import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSingleRecordComponent } from './mobile-single-record.component';

describe('MobileSingleRecordComponent', () => {
  let component: MobileSingleRecordComponent;
  let fixture: ComponentFixture<MobileSingleRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSingleRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSingleRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
