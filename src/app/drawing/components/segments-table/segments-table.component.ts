import { CircuitService } from 'src/app/shared/circuit/circuit.service';
import { Component } from '@angular/core';
import Segment from '../../models/segment.type';
import SegmentType from '../../models/segment-type.type';
import ChangeSegmentTypeConfig from '../../configs/change-segment-type.config';

@Component({
    selector: 'app-segments-table',
    templateUrl: './segments-table.component.html',
    styleUrls: ['./segments-table.component.css']
})
export class SegmentsTableComponent {

    changeSegmentTypeConfiguration = ChangeSegmentTypeConfig;
    segments: Segment[]

    constructor(private circuitService: CircuitService) {
        this.segments = this.circuitService.segments;
    }

    changeSegmentType(oldSegment: Segment, newType: SegmentType): void {
        this.circuitService.changeSegmentType(oldSegment, newType);
    }

    deleteSegment(segment: Segment): void {
        this.circuitService.deleteSegment(segment);
    }

}
