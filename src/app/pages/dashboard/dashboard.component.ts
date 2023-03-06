import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatGridList } from '@angular/material/grid-list';

import { PolicyComponent } from '../../components/common/policy/policy.component';

import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions , Pagination, Virtual} from 'swiper';
import { map, Observable } from 'rxjs';

SwiperCore.use([Virtual, Pagination]);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('swiper', { static: false }) swiper : SwiperComponent;
  @ViewChild('grid') grid: MatGridList;

  cols : number = 2 ;
  slides : number = 2 ;

  aquarius_list : Array<string> = [
    "../../../assets/landing/1.jpg" ,
    "../../../assets/landing/2.jpg" ,
    "../../../assets/landing/3.jpg" ,
    "../../../assets/landing/4.jpg" ,
    "../../../assets/landing/5.jpg" ,
    "../../../assets/landing/6.jpg" ,
    "../../../assets/landing/7.jpg" ,
    "../../../assets/landing/8.jpg" ,
    "../../../assets/landing/9.jpg" ,
    "../../../assets/landing/10.jpg" ,
    "../../../assets/landing/11.jpg" ,
    "../../../assets/landing/12.jpg" ,
    "../../../assets/landing/13.jpg" ,
  ]

  game_list : Array<string> = [
    "../../../assets/landing/game_1.jpg" ,
    "../../../assets/landing/game_2.mp4" ,
    "../../../assets/landing/game_3.jpg" ,
    "../../../assets/landing/game_4.jpg" ,
    "../../../assets/landing/game_5.jpg" ,
  ]

  constructor(public dialog: MatDialog, private mediaObserver: MediaObserver) {}

  ngOnInit() {
    const grid = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]) ;

    const perSlide = new Map([
      ['xs', 1],
      ['sm', 1],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]) ;

    this.mediaObserver.asObservable().subscribe((changes : MediaChange[]) => {
      console.log(changes[0]) ;
      this.cols = grid.get(changes[0].mqAlias) || 0;
      this.slides = perSlide.get(changes[0].mqAlias) || 1 ;
    })

    // .pipe(
    //   map( (changes : MediaChange[]) => {
    //     console.log(changes.map(c => c.mqAlias));
    //     console.log ("dfdf") ;

    //     console.log(changes[0]) ;
    //     console.log(grid.get(changes[0].mqAlias)) ;
    //     return grid.get(changes[0].mqAlias) ;

    //   })
    // ) ;
  }

  ngAfterViewInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(PolicyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onSwiper( swiper : any) {
  }

  onSlideChange() {
  }

  slideNext() {
    this.swiper.swiperRef.slideNext(500) ;
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev(500) ;
  }
}
