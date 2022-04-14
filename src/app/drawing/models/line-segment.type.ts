class LineSegment {
    
    public readonly type: "Line" = "Line";

    constructor(
        public heigth: number,
        public length: number
    ) { }

    get path(): string {        
        return `l${this.length} ${this.heigth}`
    }

}

export default LineSegment