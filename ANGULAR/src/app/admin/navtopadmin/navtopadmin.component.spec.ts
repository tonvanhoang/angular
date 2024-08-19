import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtopadminComponent } from './navtopadmin.component';

describe('NavtopadminComponent', () => {
  let component: NavtopadminComponent;
  let fixture: ComponentFixture<NavtopadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavtopadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavtopadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
