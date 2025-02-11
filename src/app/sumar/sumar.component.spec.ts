import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumarComponent } from './sumar.component';

describe('SumarComponent', () => {
  let component: SumarComponent;
  let fixture: ComponentFixture<SumarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
