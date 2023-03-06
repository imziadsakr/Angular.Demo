import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { LinkData } from './header.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  sticky: boolean = false ;
  absolute_sticky : boolean = false ;
  selected_tab : number = 0 ;

  tabs_list : Array<LinkData> = [
    {
      link : 'white-whine',
      label : 'Why Wine'
    },
    {
      link : 'how-it-works',
      label : 'How It Works'
    },
    {
      link : 'blog',
      label : 'Blog'
    },
    {
      link : 'marketplace',
      label : 'Marketplace'
    },
    {
      link : 'whiskey-vest',
      label : 'Whiskeyvest'
    }
  ]

  @HostListener('window:scroll', ["$event"]) onScroll(event: Event) {
    let window = event.currentTarget as Window;
    if(!this.absolute_sticky) this.sticky = window.scrollY >= 10;
  }

  constructor(router : Router) {
    router.events
      .subscribe((e) => {
        if(e instanceof NavigationStart) {
          if(e.url.search('/blog') >= 0) {
            this.absolute_sticky = true ;
            this.sticky = true ;
            this.selected_tab = 2 ;
          } else if(e.url.search('/marketplace') >= 0) {
            this.absolute_sticky = false ;
            this.sticky = window.scrollY >= 10 ;
            this.selected_tab = 3 ;
          }
        }
      })
  }

  ngOnInit(): void {
  }

  selectTab(tab_index : number) {
    this.selected_tab = tab_index ;
  }
}
