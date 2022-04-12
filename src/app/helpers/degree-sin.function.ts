import degreesToRadians from "./degree-to-radians.function";

function degreeSin(degrees: number): number {
    return Math.sin(degreesToRadians(degrees));
}

export default degreeSin