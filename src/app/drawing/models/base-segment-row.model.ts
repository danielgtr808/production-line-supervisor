import { Component, EventEmitter, Input, Output } from '@angular/core';
import SegmentType from './segment-type.type';
import Segment from './segment.type';

@Component({
    template: ''
})
export class BaseSegmentRowComponent {

    @Input() segment: Segment | undefined;
    @Output() changeSegmentType = new EventEmitter<SegmentType>();

    onInput(value: number, field: keyof Segment): void {
        if(!this.segment) return;

        if(Object.keys(this.segment).includes(field)) {
            // @ts-ignore
            this.segment[field] = value;
        }
    }

    onChangeSegmentType(newType: SegmentType): void {
        this.changeSegmentType.emit(newType);
    }

}
