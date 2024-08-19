import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeditaccountComponent } from './formeditaccount.component';

describe('FormeditaccountComponent', () => {
  let component: FormeditaccountComponent;
  let fixture: ComponentFixture<FormeditaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormeditaccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormeditaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
