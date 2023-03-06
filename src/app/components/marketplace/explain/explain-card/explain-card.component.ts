import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-explain-card',
  templateUrl: './explain-card.component.html',
  styleUrls: ['./explain-card.component.scss']
})
export class ExplainCardComponent implements OnInit {
  @Input() img : string = '' ;
  @Input() title : string = '' ;
  @Input() desc : string = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
