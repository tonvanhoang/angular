import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBycategoryComponent } from './product-bycategory.component';

describe('ProductBycategoryComponent', () => {
  let component: ProductBycategoryComponent;
  let fixture: ComponentFixture<ProductBycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBycategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductBycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
