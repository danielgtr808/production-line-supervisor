import degreesToRadians from "./degree-to-radians.function";

function degreeCos(degrees: number): number {
    return Math.cos(degreesToRadians(degrees));
}

export default degreeCos