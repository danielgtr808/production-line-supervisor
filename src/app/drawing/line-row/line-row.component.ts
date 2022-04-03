import { Component, Input } from '@angular/core';
import LineSegment from '../models/line-segment.type';

@Component({
    selector: 'app-line-row',
    templateUrl: './line-row.component.html',
    styleUrls: ['./line-row.component.css']
})
export class LineRowComponent {

    @Input() segment: LineSegment | undefined;

    onInput(value: number, field: "heigth" | "length"): void {
        console.log("aqui")
        this.segment![field] = value;
    }

}
