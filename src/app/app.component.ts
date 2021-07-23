import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-reddit';
  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean{
    console.log("addArticle", title.value, link.value);
    return false
  }
}
