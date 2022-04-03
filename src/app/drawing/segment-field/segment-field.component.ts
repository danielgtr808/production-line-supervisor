import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-segment-field',
    templateUrl: './segment-field.component.html',
    styleUrls: ['./segment-field.component.css'] 
})
export class SegmentFieldComponent {

    @Input() label: string = "";
    @Input() value: number = 0;
    @Output() inputEvent = new EventEmitter<number>();

    onInput(): void {
        console.log("ah")
        this.inputEvent.emit(this.value);
    }

}
