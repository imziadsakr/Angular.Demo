import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  first_percent : number = 0 ;
  second_percent : number = 0 ;
  percent_timer : ReturnType<typeof setInterval>;

  constructor() { }

  ngOnInit(): void {
    this.percent_timer = setInterval(() => {
      if(this.first_percent < 3044) this.first_percent = this.first_percent + 1 ;
      if(this.second_percent < 1967) this.second_percent = this.second_percent + 1 ;
      if(this.first_percent === 3044) clearInterval(this.percent_timer) ;
    }, 0.01) ;
  }

  percent_list : Array<string> = [
    "400%",
    "300%",
    "200%",
    "100%"
  ]

  date_list : Array<string> = [
    "JAN 2004",
    "JAN 2006",
    "JAN 2008",
    "JAN 2010",
    "JAN 2012",
    "JAN 2014",
    "JAN 2016",
    "JAN 2018",
    "JAN 2020"
  ]

  format(val : number){
    return val.toString().split("").map(
      (char,i) => (!i || i%3?"":",")+char
    ).join("");
  }
}
