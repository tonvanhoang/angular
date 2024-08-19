import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormrepcommentComponent } from './formrepcomment.component';

describe('FormrepcommentComponent', () => {
  let component: FormrepcommentComponent;
  let fixture: ComponentFixture<FormrepcommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormrepcommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormrepcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
