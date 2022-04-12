import degreeCos from "src/app/helpers/degree-cos.function";
import degreeSin from "src/app/helpers/degree-sin.function";

class ArcSegment {

    public readonly type: "Arc" = "Arc";

    constructor(
        public degrees: number,
        public inclination: number,
        public radius: number,
        public sweep: number
    ) { }

    get path(): string {
        return `a${this.radius} ${this.radius} 0 0 ${this.sweep} ${this.pointB}`;
    }

    private get pointB(): string {
        const xA = this.radius * (1 - degreeCos(this.degrees));
        const yA = this.radius * degreeSin(this.degrees) * (this.sweep ? -1 : 1);

        return `${xA*degreeCos(this.inclination) + yA*degreeSin(this.inclination)} ` +
        `${yA*degreeCos(this.inclination) - xA*degreeSin(this.inclination)}`
    }

}

export default ArcSegment