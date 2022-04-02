/**
 * Represents a segment inside the "d" attribute of the "path" element. There is only "Line" and
 * "Arc" because in the applicaton context, other types of segment are not required.
 */
type Segment = { type: "Line", heigth: number, length: number } | { type: "Arc", radius: number }

export default Segment