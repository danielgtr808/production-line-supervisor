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

    constructor(private circuitService: CircuitService) {
        this.segments = circuitService.segments;
    }

    createSegment(type?: SegmentType) {
        this.circuitService.createSegment(type);
    }

    changeSegmentType(oldSegment: Segment, newType: SegmentType): void {
        this.circuitService.replaceSegmentByType(oldSegment, newType);
    }

}
