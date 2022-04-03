import { CircuitService } from 'src/app/shared/circuit/circuit.service';
import { Component } from '@angular/core';
import Segment from '../models/segment.type';
import SegmentType from '../models/segment-type.type';

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

    createSegment(type: SegmentType) {
        switch(type) {
            case "Arc":
                this.segments.push({
                    radius: 0,
                    type: "Arc"
                });
                break;
            case "Line":
                this.segments.push({
                    heigth: 0,
                    length: 0,
                    type: "Line"
                });
                break
        }
    }

    changeSegmentType(segment: Segment, newType: SegmentType): void {
        
    }

}
