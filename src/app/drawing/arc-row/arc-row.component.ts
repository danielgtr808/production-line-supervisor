import { Component, EventEmitter, Input, Output } from '@angular/core';
import ArcSegment from '../models/arc-segment.type';
import SegmentType from '../models/segment-type.type';

@Component({
    selector: 'app-arc-row',
    templateUrl: './arc-row.component.html',
    styleUrls: ['./arc-row.component.css']
})
export class ArcRowComponent {

    @Input() segment: ArcSegment | undefined;
    @Output() changeSegmentType = new EventEmitter<SegmentType>();


    onInput(value: number, field: keyof ArcSegment): void {
        if(!this.segment || field === "type") return;

        this.segment[field] = value
    }

    onChangeSegmentType(newType: SegmentType): void {
        this.changeSegmentType.emit(newType);
    }

}
