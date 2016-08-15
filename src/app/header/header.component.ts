<<<<<<< HEAD
import { Component, OnInit, OnChanges, Input, ViewEncapsulation } from '@angular/core';
import { SearchService } from '../search.service';
=======
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
>>>>>>> 3f901f2157b48652eadf526f3796312f1c94b690

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent implements OnInit, OnChanges {

  @Input()
  title: string;
  @Input()
  titleurl: string;

  @Input()
  test: string;

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  num = 10;

  subtitle_bgcolor = "yellow";

  constructor(private searchSvc: SearchService) {

  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.test);
  }

  plusOne($event: MouseEvent) {
    console.log($event);
    if($event.metaKey) {
      this.num--;
    } else {
      this.num++;
    }
  }

  getStyle() {
    return {'background-color': this.subtitle_bgcolor};
  }

}
