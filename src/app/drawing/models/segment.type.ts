import ArcSegment from "./arc-segment.type"
import LineSegment from "./line-segment.type"

/**
 * Represents a segment inside the "d" attribute of the "path" element. There is only "Line" and
 * "Arc" because in the applicaton context, other types of segment are not required.
 */
type Segment = ArcSegment | LineSegment

export default Segment