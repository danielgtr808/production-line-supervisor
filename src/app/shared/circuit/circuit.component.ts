
import CircuitBoardInfo from './circuit-board-info.model';
import { Component, Input } from '@angular/core';
import Segment from 'src/app/drawing/models/segment.type';

@Component({
    selector: 'app-circuit',
    templateUrl: './circuit.component.html',
    styleUrls: ['./circuit.component.css']
})
export class CircuitComponent {

    @Input() segments: Segment[] = [];

    boardInfo: CircuitBoardInfo = {
        isDraggin: false,
        mouseX: 0,
        mouseY: 0,
        scale: 1,
        transformX: 0,
        transformY: 0
    }

    get d(): string {
        let segmentsAttribute: string = "M0 0";
        this.segments.forEach(x => segmentsAttribute += ` ${x.path}`);

        return segmentsAttribute;
    }

    get transform(): string {
        return `translate(${this.boardInfo.transformX} ${this.boardInfo.transformY}) scale(${this.boardInfo.scale} ${this.boardInfo.scale})`;
    }

    endScroll(): void {
        this.boardInfo.isDraggin = false;
    }

    scrolling(event: MouseEvent): void {
        if(!this.boardInfo.isDraggin) {
            event.preventDefault();
            return
        }

        this.boardInfo.transformX += (this.boardInfo.mouseX - event.clientX)*-1;
        this.boardInfo.transformY += (this.boardInfo.mouseY - event.clientY)*-1;
        this.boardInfo.mouseX = event.clientX;
        this.boardInfo.mouseY = event.clientY;
    }

    startScroll(event: MouseEvent): void {
        this.boardInfo.isDraggin = true;
        this.boardInfo.mouseX = event.clientX;
        this.boardInfo.mouseY = event.clientY;
    }

    zoom(event: WheelEvent): void {
        const scaleIncrement = event.deltaY > 0 ? -0.25 : 0.25;

        if(this.boardInfo.scale <= 0.25 && scaleIncrement < 0) return;
        this.boardInfo.scale += scaleIncrement;
    }

}
