class LineSegment {
    
    public readonly type: "Line" = "Line";

    constructor(
        public heigth: number,
        public length: number
    ) { }

    get linearLength(): number {
        return Math.sqrt(
            Math.pow(this.heigth, 2) + Math.pow(this.length, 2)
        );
    }

    get path(): string {        
        return `l${this.length} ${this.heigth}`
    }

}

export default LineSegment