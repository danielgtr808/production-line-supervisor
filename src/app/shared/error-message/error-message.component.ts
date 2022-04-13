import { Component } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent {

    public displayStyle: "flex" | "none" = "none";
    public message: string = "";

    constructor() {
        this.close();
    }
    
    close() {
        this.displayStyle = "none";
    }
    
    showMessage(message: string): void {
        if(message === "") return;
        this.message = message;
        this.displayStyle = "flex";
    }

}
