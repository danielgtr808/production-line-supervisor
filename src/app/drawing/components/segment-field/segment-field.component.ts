import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FieldConfig } from './field-config.model';

@Component({
    selector: 'app-segment-field',
    templateUrl: './segment-field.component.html',
    styleUrls: ['./segment-field.component.css']
})
export class SegmentFieldComponent {

    @Input() config: FieldConfig = { type: "input" };
    @Input() label: string = "";
    @Input() value: any;

    @Output() valueChange = new EventEmitter<any>();

    fieldValueChange(event: Event): void {
        const field = (event.target as HTMLInputElement | HTMLSelectElement);        
        this.valueChange.emit(field.type === "number" ? parseFloat(field.value) : field.value);
    }

}
