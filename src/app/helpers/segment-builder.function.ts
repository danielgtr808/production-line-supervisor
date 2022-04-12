import NeverFunction from "src/app/helpers/never-function.function";
import Segment from "../drawing/models/segment.type";

function segmentBuilder(segment: Segment): string {
    const segmentType = segment.type;

    switch(segmentType) {
        case "Arc":
        const xA = segment.radius*(1 - Math.cos(segment.degrees * (Math.PI/180)));
        const yA = segment.radius*Math.sin(segment.degrees * (Math.PI/180)) * (segment.sweep ? -1 : 1)

            return `a${segment.radius} ` +
                    `${segment.radius} ` +
                    `0 0 ${segment.sweep} ` +
                    `${xA*Math.cos(segment.inclination * (Math.PI/180)) + yA*Math.sin(segment.inclination * (Math.PI/180))} ` +
                    `${yA*Math.cos(segment.inclination * (Math.PI/180)) - xA*Math.sin(segment.inclination * (Math.PI/180))}`
        case "Line":
            return `l${segment.length} ${segment.heigth}`
        default:
            NeverFunction(segmentType);
            return "";
    }
}

export default segmentBuilder