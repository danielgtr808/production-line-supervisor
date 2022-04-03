import { Component, EventEmitter, Input, Output } from '@angular/core';
import LineSegment from '../models/line-segment.type';
import SegmentType from '../models/segment-type.type';

@Component({
    selector: 'app-line-row',
    templateUrl: './line-row.component.html',
    styleUrls: ['./line-row.component.css']
})
export class LineRowComponent {

    @Input() segment: LineSegment | undefined;
    @Output() changeSegmentType = new EventEmitter<SegmentType>();

    onInput(value: number, field: "heigth" | "length"): void {
        this.segment![field] = value;
    }

    onChangeSegmentType(newType: SegmentType): void {
        this.changeSegmentType.emit(newType);
    }

}
