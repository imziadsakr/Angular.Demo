import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.scss']
})
export class TopBannerComponent implements OnInit {
  @Input() background_color : string = '' ;
  @Input() img_src : string = '' ;
  @Input() title : string = '';
  @Input() desc : string = '' ;
  @Input() btn_text : string = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
