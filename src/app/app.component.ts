import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

export interface Menu {
    name: string 
    link: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    open: boolean = false;
    menus: Menu[] = [
        { name: 'Home', link: 'home' },
        { name: 'Interior Design', link: 'interior-design' },
        { name: 'Living Room', link: 'living-room' },
        { name: 'Sofa', link: 'sofa' },
        { name: 'About', link: 'about' }
    ];
    constructor(
        private _cdRef: ChangeDetectorRef
    ) {}

    /**
     * Toggle menu
     */
    onToggleMenu() {
        this.open = !this.open;
        this._cdRef.detectChanges();
    }

    /**
     * Click on menu item
     */
    onClickMenuItem() {
        this.open = false;
        this._cdRef.detectChanges();
    }
}
