import { Component, OnInit } from '@angular/core';
import { CardData } from './explain.types';

@Component({
  selector: 'app-explain',
  templateUrl: './explain.component.html',
  styleUrls: ['./explain.component.scss']
})
export class ExplainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card_data_list : Array<CardData> = [
    {
      img : 'assets/marketplace/diamond.svg',
      title : 'Scarcity',
      desc : 'Wineries often make investment-grade wines in limited quantities — a few hundred bottles or so. That number will only fall with time as people drink them.'
    },
    {
      img : 'assets/marketplace/flower.svg',
      title : 'Aging',
      desc : 'Wine improves with time. The astringent compounds mellow while in storage, helping to bring out new flavors and textures in the wine.'
    },
    {
      img : 'assets/marketplace/target.svg',
      title : 'Brand Equity',
      desc : 'Screaming Eagle. Château Cheval Blanc. Domaine de la Romanée-Conti. These estates rank among the most prestigious names in wine and can command six figures for a single bottle.'
    },
  ]
}
