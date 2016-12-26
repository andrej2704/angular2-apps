import { Component } from '@angular/core';


@Component({
  selector: 'jumbotron',
  templateUrl: './jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;

    constructor(){
        this.jbtHeading = 'Angular2 Apps';
        this.jbtText = 'Learning Angular2 by doing';
        this.jbtBtnText = 'Read More';
        this.jbtBtnUrl = '/about';
    }
}
