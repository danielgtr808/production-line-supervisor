import { Injectable } from '@angular/core';
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

    changeSegmentType(oldSegment: Segment, newType: SegmentType): void {
        Object.assign(oldSegment, this.generateSegment(newType));
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
                return {
                    degrees: 90,
                    inclination: 0,
                    radius: 0,
                    sweep: 0,
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

        throw("This line will never be reached.");
    }

}
