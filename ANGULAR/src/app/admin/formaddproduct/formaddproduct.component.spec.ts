import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaddproductComponent } from './formaddproduct.component';

describe('FormaddproductComponent', () => {
  let component: FormaddproductComponent;
  let fixture: ComponentFixture<FormaddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormaddproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
