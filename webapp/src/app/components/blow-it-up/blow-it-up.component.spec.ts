import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlowItUpComponent } from './blow-it-up.component';

describe('BlowItUpComponent', () => {
  let component: BlowItUpComponent;
  let fixture: ComponentFixture<BlowItUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlowItUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlowItUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
