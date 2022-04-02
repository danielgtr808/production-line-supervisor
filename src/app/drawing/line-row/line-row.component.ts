import { Component, Input } from '@angular/core';
import LineSegment from '../models/line-segment.type';

@Component({
    selector: 'app-line-row',
    templateUrl: './line-row.component.html',
    styleUrls: ['./line-row.component.css']
})
export class LineRowComponent {

    @Input() segment: LineSegment | undefined;

    onInput(event: Event, field: "heigth" | "length"): void {
        this.segment![field] = parseFloat((event.target as HTMLInputElement).value) || 0;
    }


}
