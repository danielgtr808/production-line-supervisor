import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sweep-arc-select',
  templateUrl: './sweep-arc-select.component.html',
  styleUrls: ['./sweep-arc-select.component.css']
})
export class SweepArcSelectComponent {

    @Input() value: number = 0;
    @Output() changeEvent = new EventEmitter<number>();

    constructor() { }

    onChange(event: Event): void {
        this.changeEvent.emit(parseInt((event.target as HTMLSelectElement).value) as any)
    }

}
