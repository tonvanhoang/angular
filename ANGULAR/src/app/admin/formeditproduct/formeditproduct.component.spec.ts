import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeditproductComponent } from './formeditproduct.component';

describe('FormeditproductComponent', () => {
  let component: FormeditproductComponent;
  let fixture: ComponentFixture<FormeditproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormeditproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormeditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
