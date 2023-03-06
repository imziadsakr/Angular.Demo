import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter() ;

  constructor() { }

  ngOnInit(): void {
  }

  closeBtnClicked () {
    this.closeMenu.emit() ;
  }
}
