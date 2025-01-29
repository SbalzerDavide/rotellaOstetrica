import {
  Component,
  computed,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { TranslocoPipe } from '@jsverse/transloco';
import { DateType } from '../model/common.model';
import { DatePipe } from '@angular/common';
import { DatePickerModule } from 'primeng/datepicker';
import { FieldsetModule } from 'primeng/fieldset';
import { PregnancyDateService } from '../services/pregnancy-date.service';
import { Chip } from 'primeng/chip';
import { InputNumber } from 'primeng/inputnumber';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-stepper',
  imports: [
    StepperModule,
    ButtonModule,
    TranslocoPipe,
    DatePipe,
    DatePickerModule,
    FormsModule,
    FieldsetModule,
    Chip,
    InputNumber,
    CardModule,
    DividerModule
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  startPregnancy = input<Date | null>(null);
  deliveryDate = input<Date | null>(null);

  onUpdateStartPregnancy = output<Date | null>();
  onUpdateDeliveryDate = output<Date | null>();

  activeIndex = signal<number>(1);
  dateType = signal<DateType | null>(null);

  inputDate = model<Date | null>(null);
  inputDateForWeeks = model<Date | null>(null);
  weeksFromWeeks = model<number>(0);
  daysFromWeeks = model<number>(0);
  dateFromWeeks = computed(() => {
    const date = new Date(this.startPregnancy()!);
    date.setDate(
      date.getDate() + this.weeksFromWeeks()! * 7 + this.daysFromWeeks()!
    );
    return date;
  });

  weeksFromDate = signal<number>(0);
  daysFromDate = signal<number>(0);

  inputDateDatepicker = viewChild<DatePicker>('inputDateDatepicker');

  pregnancyDateService = inject(PregnancyDateService);

  selectDateType(type: DateType) {
    this.dateType.set(type);
    this.activeIndex.set(2);
    setTimeout(() => {
      this.inputDateDatepicker()
        ?.el?.nativeElement?.querySelector('input')
        ?.click();
    }, 10);
  }

  selectDate() {
    console.log('selectDate');

    if (this.dateType() === 'lastMestruation') {
      // this.startPregnancy.set(this.inputDate());
      console.log('this.inputDate()', this.inputDate());

      this.onUpdateStartPregnancy.emit(this.inputDate());
    } else if (this.dateType() === 'expectedDelivery') {
      // this.deliveryDate.set(this.inputDate());
      this.onUpdateDeliveryDate.emit(this.inputDate());
    }
    this.activeIndex.set(3);
  }

  selectDateWeeksFromdate() {
    const { weeks, days } = this.pregnancyDateService.getWeeks(
      this.startPregnancy()!,
      this.inputDateForWeeks()!
    );
    this.weeksFromDate.set(weeks);
    this.daysFromDate.set(days);
  }

  reset() {
    this.activeIndex.set(1);
    this.dateType.set(null);
    this.inputDateForWeeks.set(null);
    this.weeksFromDate.set(0);
    this.daysFromDate.set(0);
    this.onUpdateDeliveryDate.emit(null);
    this.onUpdateStartPregnancy.emit(null);
  }
}
