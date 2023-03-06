import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-small-card',
  templateUrl: './blog-small-card.component.html',
  styleUrls: ['./blog-small-card.component.scss']
})
export class BlogSmallCardComponent implements OnInit {
  @Input() img : string = '' ;
  @Input() title : string = '' ;
  @Input() author : string = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
