import { Directive, ElementRef, OnInit, Output, HostListener, EventEmitter, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appInViewport]'
})
export class InViewportDirective implements OnInit {
    @Output() inViewportEvent = new EventEmitter();
    @Input() inViewportStyle: string;
    constructor(
        private _el: ElementRef,
        private _render2: Renderer2
    ) { }

    ngOnInit() {
        console.log(this.inViewportStyle)
        this._render2.addClass(this._el.nativeElement, 'initial')
        this.inViewportEvent.emit(this.checkInViewPort(this._el));
    }

    @HostListener('window:scroll') inViewPort() {
        this.inViewportEvent.emit(this.checkInViewPort(this._el));
    }

    checkInViewPort(el: ElementRef) {
        const bounding = el.nativeElement.getBoundingClientRect();
        const value = bounding.bottom > 0 && bounding.bottom < ( window.innerHeight -64);
        if(value) {
            this._render2.addClass(el.nativeElement, this.inViewportStyle);
        } else {
            this._render2.removeClass(el.nativeElement, this.inViewportStyle);
        }
    }

}
