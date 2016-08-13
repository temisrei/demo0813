import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  title = 'Hello World';
  titleurl = 'http://blog.miniasp.com/';

  constructor(private searchSvc: SearchService) { }

}
