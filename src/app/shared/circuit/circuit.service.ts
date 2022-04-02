import { Injectable } from '@angular/core';
import Segment from 'src/app/drawing/models/segment.type';

@Injectable({
    providedIn: 'root'
})
export class CircuitService {

    public segments: Segment[] = [
        {
            heigth: 10,
            length: 100,
            type: "Line"
        },
        {
            heigth: 20,
            length: 20,
            type: "Line"
        }
    ];

    addSegment(segment: Segment): void {
        this.segments.push(segment);
    }

    loadSegments(segments: Segment[]): void {
        this.segments = segments;
    }

    removeSegment(segment: Segment): void {
        const segmentIndex = this.segments.findIndex(x => x === segment);
        if(segmentIndex === -1) return;

        this.segments.splice(segmentIndex, 1);
    }

}
