import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { Chip } from 'primeng/chip';

import { TranslocoPipe } from '@jsverse/transloco';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-result-card',
  imports: [CardModule, TranslocoPipe, DatePipe, DividerModule, Chip],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {
  startPregnancy = input<Date | null>(null);
  deliveryDate = input<Date | null>(null);
  weeks = input<number | null>();
  days = input<number | null>();
}
