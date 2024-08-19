import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaddcategoryComponent } from './formaddcategory.component';

describe('FormaddcategoryComponent', () => {
  let component: FormaddcategoryComponent;
  let fixture: ComponentFixture<FormaddcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormaddcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormaddcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
