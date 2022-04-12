import { Injectable } from '@angular/core';
import ArcSegment from 'src/app/drawing/models/arc-segment.type';
import LineSegment from 'src/app/drawing/models/line-segment.type';
import SegmentType from 'src/app/drawing/models/segment-type.type';
import Segment from 'src/app/drawing/models/segment.type';
import NeverFunction from 'src/app/helpers/never-function.function';

@Injectable({
    providedIn: 'root'
})
export class CircuitService {

    public segments: Segment[] = [];

    createSegment(type: SegmentType = "Line"): Segment {
        const newSegment = this.generateSegment(type);
        this.segments.push(newSegment);

        return newSegment;
    }

    deleteSegment(segment: Segment) {
        const oldSegmentIndex = this.segments.findIndex(x => x === segment);
        if(oldSegmentIndex === -1) return;

        this.segments.splice(oldSegmentIndex, 1);
    }

    replaceSegmentByType(oldSegment: Segment, newType: SegmentType): void {
        const oldSegmentIndex = this.segments.findIndex(x => x === oldSegment);
        if(oldSegmentIndex === -1) return;

        this.segments[oldSegmentIndex] = this.generateSegment(newType);
    }

    loadSegments(segments: Segment[]): void {
        this.segments = segments;
    }

    removeSegment(segment: Segment): void {
        const segmentIndex = this.segments.findIndex(x => x === segment);
        if(segmentIndex === -1) return;

        this.segments.splice(segmentIndex, 1);
    }

    private generateSegment(type: SegmentType): Segment {
        switch(type) {
            case "Arc":
                return new ArcSegment(90, 0, 0, 0);
            case "Line":
                return new LineSegment(0, 0);
            default:
                NeverFunction(type);
                break;
        }

        throw("This line will never be reached.");
    }

}
