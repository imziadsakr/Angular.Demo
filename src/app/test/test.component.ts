import { Component, Input, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

export class Whether {
  public description : string = '';
  public name : string = '';

  constructor () {

  }
}

@Component({
  selector: 'app-test',
  template: `<input type='number' (change)="changeCardCount($event)"/>

    <input type='text' (change)="changeDesc($event)" [(ngModel)]="description"/>
    <button (click)="onSubmit()">
      submit
    </button>
  <br/>
  <table >
    <tbody>
      <tr #inserttarget>

      </tr>
    </tbody>
  </table>
  <br/>
  <button (click)="generateCard()" type='button'>Generate Card</button>
  `,
  styles : ['table, th, td { border : 1px solid red; color : black; }']
})
export class TestComponent implements OnInit {

  @Input() count: number;

  @ViewChild('inserttarget', {static: false})
  public insertTarget:ElementRef;
  public description : string = "" ;
  public whether : Whether;

  constructor (
    private renderer:Renderer2,
    private el:ElementRef
  ) {
    this.whether = new Whether();
  }
  ngOnInit() {

  }

  changeCardCount(event : any) {
    this.count = parseInt(event.target.value) ;
  }

  generateCard() {
    for(let i = 0 ; i < this.count ; i++) {
      let td = this.renderer.createElement('td');
      let td_text = this.renderer.createText('down');

      this.renderer.appendChild(td, td_text);
      this.renderer.appendChild(this.insertTarget.nativeElement, td); // use this.el.nativeElement to insert into template root
      this.renderer.listen(td, 'click', () => this.clickCell(i));
    }
  }

  clickCell(cell_index: number) {
    this.removeAllCell();
    for(let i = 0 ; i < this.count ; i++) {
      let td = this.renderer.createElement('td');
      let td_text = this.renderer.createText( i === cell_index ? 'up' : 'down');

      this.renderer.appendChild(td, td_text);
      this.renderer.appendChild(this.insertTarget.nativeElement, td); // use this.el.nativeElement to insert into template root
      this.renderer.listen(td, 'click', () => this.clickCell(i));
    }
  }

  removeAllCell() {
    const childElements = this.insertTarget.nativeElement.children;
    for (let child of childElements) {
      this.renderer.removeChild(this.insertTarget.nativeElement, child);
    }
  }

  changeDesc(event: any) {
    console.log(event.target.value) ;
  }

  onSubmit() {
    this.whether.description = this.description ;
    // this.whether.name = this.name ;
    console.log(this.whether.description, this.whether.name) ;
  }
}
