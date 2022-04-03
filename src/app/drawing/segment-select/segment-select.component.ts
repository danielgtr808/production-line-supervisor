import { Component, EventEmitter, Input, Output } from '@angular/core';
import SegmentType from '../models/segment-type.type';

@Component({
    selector: 'app-segment-select',
    templateUrl: './segment-select.component.html',
    styleUrls: ['./segment-select.component.css']
})
export class SegmentSelectComponent {

    @Input() value: string = "";
    @Output() changeEvent = new EventEmitter<SegmentType>();

    constructor() { }

    onChange(event: Event): void {
        this.changeEvent.emit((event.target as HTMLSelectElement).value as any)
    }

}
