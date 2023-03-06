import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-banner',
  templateUrl: './generic-banner.component.html',
  styleUrls: ['./generic-banner.component.scss']
})
export class GenericBannerComponent implements OnInit {
  @Input() small_title : string = '' ;
  @Input() title : string = '' ;
  @Input() desc : string = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
