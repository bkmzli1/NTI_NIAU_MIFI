import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled3';


  constructor() {

    this.jsLoader(["assets/js/script.js"])

  }

  jsLoader(s: string[]) {
    for (var sKey of s) {
      let scriptElement: HTMLScriptElement;
      scriptElement = document.createElement("script");
      scriptElement.src = sKey;
      document.body.appendChild(scriptElement)
    }

  }
}
