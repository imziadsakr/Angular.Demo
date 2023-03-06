import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  @Input() img : string = '' ;
  @Input() title : string = '' ;
  @Input() author : string = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
