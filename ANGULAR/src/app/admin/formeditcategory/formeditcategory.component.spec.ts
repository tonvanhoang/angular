import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeditcategoryComponent } from './formeditcategory.component';

describe('FormeditcategoryComponent', () => {
  let component: FormeditcategoryComponent;
  let fixture: ComponentFixture<FormeditcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormeditcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormeditcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
