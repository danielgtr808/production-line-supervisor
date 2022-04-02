import NeverFunction from "src/app/helpers/never-function.function";
import Segment from "../drawing/models/segment.type";

function SegmentBuilder(segment: Segment): string {
    const segmentType = segment.type;

    switch(segmentType) {
        case "Arc":
            return `a${segment.radius} ${segment.radius} 0 0 0 ${segment.radius} ${segment.radius}`
        case "Line":
            return `l${segment.length} ${segment.heigth}`
        default:
            NeverFunction(segmentType);
            return "";
    }
}

export default SegmentBuilder