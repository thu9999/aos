import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
export interface Image {
    url: string 
    alt: string
}
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @ViewChild('img', { static: false }) imageElementRef: ElementRef;
    isInView: boolean = false;
    images: Image[] = [
        { url: '../../../assets/images/1.png', alt: 'Image 1'},
        { url: '../../../assets/images/2.png', alt: 'Image 2'},
        { url: '../../../assets/images/3.jpg', alt: 'Image 3'},
        { url: '../../../assets/images/4.jpg', alt: 'Image 4'},
        { url: '../../../assets/images/5.jpg', alt: 'Image 5'},
        { url: '../../../assets/images/6.jpg', alt: 'Image 6'}
    ]
    constructor() { }

    ngOnInit(): void {
    }

    inViewPort(event) {
        this.isInView = event;
    }
}
