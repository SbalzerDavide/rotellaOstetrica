import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PregnancyDateService {
  constructor() {}

  getStartPregnancyDate(deliveryDate: Date): Date {
    const startPregnancyDate = new Date(deliveryDate);

    startPregnancyDate.setDate(startPregnancyDate.getDate() - 280);

    return startPregnancyDate;
  }

  getDeliveryDate(startPregnancyDate: Date): Date {
    const deliveryDate = new Date(startPregnancyDate);

    deliveryDate.setDate(deliveryDate.getDate() + 280);

    return deliveryDate;
  }

  getWeeks(startDate: Date, activeDate: Date = new Date()): { weeks: number; days: number } {
    const start = new Date(startDate);
    const today = new Date(activeDate);

    const diff = today.getTime() - start.getTime();
    
    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    return { weeks, days };
  }
}
