import { CircuitService } from 'src/app/shared/circuit/circuit.service';
import { Component } from '@angular/core';
import Segment from '../models/segment.type';

@Component({
    selector: 'app-segments-side-menu',
    templateUrl: './segments-side-menu.component.html',
    styleUrls: ['./segments-side-menu.component.css']
})
export class SegmentsSideMenuComponent {

    public segments: Segment[] = [];

    constructor(circuitService: CircuitService) {
        this.segments = circuitService.segments;
    }

    createLineRow(): void {
        // const newSegment: Segment = {
        //     heigth: 0,
        //     index: 0,
        //     length: 0,
        //     type: "Line"
        // }

        // this.segments.push(newSegment);
        if(this.segments[0].type === "Line") {
            this.segments[0].heigth += 15
        }
    }

}
