import { Component, signal } from "@angular/core";

@Component({
    templateUrl: `counter_page.component.html`,
    styleUrls: [`counter_page.component.css`],
})
export class CounterPage {

    counter = 0;
    counterSignal = signal(10);
    increaseBy(value: number) { 
        this.counter += value; 
    }

    decreaseBy(value: number) {
        this.counter += value;
    }

    resetCounter(value: number) {
        this.counter = 0;
        this.counterSignal.update((current) => current + value);
    }

}