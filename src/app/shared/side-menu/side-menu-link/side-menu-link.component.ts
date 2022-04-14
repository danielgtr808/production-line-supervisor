import { Component, HostListener, Input } from '@angular/core';

@Component({
    selector: 'app-side-menu-link',
    templateUrl: './side-menu-link.component.html',
    styleUrls: ['./side-menu-link.component.css']
})
export class SideMenuLinkComponent {

    @Input() iconClass: string = "";
    @Input() navigateOnClick: string | undefined;
    @Input() label: string = "";

}
