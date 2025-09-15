import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
    templateUrl: `counter_page.component.html`,
    styleUrls: [`counter_page.component.css`],
    changeDetection: ChangeDetectionStrategy.OnPush, //deshabilita el zonejs del componente
})
export class CounterPage {

    constructor() {
        setInterval(() => {
           // this.counter += 1;
            this.counterSignal.update((v) => v + 1)
            console.log('tick');
        }, 2000);
    }

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
        
    }

    increaseSignalSet(value: number) {
        //se utiliza cuando el valor ya esta procesado
        this.counterSignal.set(15);
     }

    increaseSignalUpdate(value: number) {
        //se utiliza cuando el valor depende del valor actual
        this.counterSignal.update((current) => current + value);
    }


}