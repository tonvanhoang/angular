import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavleftadminComponent } from './navleftadmin.component';

describe('NavleftadminComponent', () => {
  let component: NavleftadminComponent;
  let fixture: ComponentFixture<NavleftadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavleftadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavleftadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
