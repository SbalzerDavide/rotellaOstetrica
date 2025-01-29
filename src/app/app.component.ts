import { Component, inject, signal, viewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { StepperComponent } from './stepper/stepper.component';
import { PregnancyDateService } from './services/pregnancy-date.service';
import { ResultCardComponent } from './result-card/result-card.component';

@Component({
  selector: 'app-root',
  imports: [
    ButtonModule,
    StepperComponent,
    ResultCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rotella-ostetrica';

  stepper = viewChild(StepperComponent);

  startPregnancy = signal<Date | null>(null);
  deliveryDate = signal<Date | null>(null);
  weeks = signal<number | null>(null);
  days = signal<number | null>(null);
  
  pregnancyDateService = inject(PregnancyDateService);

  onUpdateStartPregnancy(date: Date | null) {    
    if (!date) {
      this.reset();
      return;
    }
    this.startPregnancy.set(date);
    this.deliveryDate.set(this.pregnancyDateService.getDeliveryDate(date));
    const { weeks, days } = this.pregnancyDateService.getWeeks(date);

    this.weeks.set(weeks);
    this.days.set(days);
  }
  onUpdateDeliveryDate(date: Date | null) {
    if (!date) {
      this.reset();
      return;
    }
    this.deliveryDate.set(date);
    this.startPregnancy.set(
      this.pregnancyDateService.getStartPregnancyDate(date)
    );
    const { weeks, days } = this.pregnancyDateService.getWeeks(
      this.startPregnancy()!
    );
    this.weeks.set(weeks);
    this.days.set(days);
  }

  reset() {
    this.startPregnancy.set(null);
    this.deliveryDate.set(null);
    this.weeks.set(null);
    this.days.set(null);
  }
}
