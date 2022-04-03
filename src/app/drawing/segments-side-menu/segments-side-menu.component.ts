import { CircuitService } from 'src/app/shared/circuit/circuit.service';
import { Component } from '@angular/core';
import Segment from '../models/segment.type';
import SegmentType from '../models/segment-type.type';
import NeverFunction from 'src/app/helpers/never-function.function';

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
        this.segments.push(this.generateSegment(type));
    }

    changeSegmentType(segment: Segment, newType: SegmentType): void {
        const oldSegmentIndex = this.segments.indexOf(segment);
        if(oldSegmentIndex === -1) return;

        this.segments[oldSegmentIndex] = this.generateSegment(newType);
    }

    private generateSegment(type: SegmentType): Segment {
        switch(type) {
            case "Arc":
                return {
                    radius: 0,
                    type: "Arc"
                }
            case "Line":
                return {
                    heigth: 0,
                    length: 0,
                    type: "Line"
                }
            default:
                NeverFunction(type);
                break;
        }

        throw("");
    }

}
