import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchApiDataComponent } from './fetch-api-data.component';

describe('FetchApiDataComponent', () => {
  let component: FetchApiDataComponent;
  let fixture: ComponentFixture<FetchApiDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchApiDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchApiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
