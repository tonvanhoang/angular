import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaddacountComponent } from './formaddacount.component';

describe('FormaddacountComponent', () => {
  let component: FormaddacountComponent;
  let fixture: ComponentFixture<FormaddacountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormaddacountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormaddacountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
