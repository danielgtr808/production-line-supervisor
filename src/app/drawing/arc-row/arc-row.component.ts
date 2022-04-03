import { Component, Input } from '@angular/core';
import ArcSegment from '../models/arc-segment.type';

@Component({
    selector: 'app-arc-row',
    templateUrl: './arc-row.component.html',
    styleUrls: ['./arc-row.component.css']
})
export class ArcRowComponent {

    @Input() segment: ArcSegment | undefined;

    onInput(value: number, field: "radius"): void {
        this.segment![field] = value;
    }

}
