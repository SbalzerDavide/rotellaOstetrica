import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionStepperComponent } from './accordion-stepper.component';

describe('AccordionStepperComponent', () => {
  let component: AccordionStepperComponent;
  let fixture: ComponentFixture<AccordionStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
