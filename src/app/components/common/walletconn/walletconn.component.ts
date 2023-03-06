import { Component, OnInit } from '@angular/core';

import { WalletData } from './walletconn.types';

@Component({
  selector: 'app-walletconn',
  templateUrl: './walletconn.component.html',
  styleUrls: ['./walletconn.component.scss']
})
export class WalletconnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collapsible = false ;

  wallets : Array<WalletData> = [
    {
      label : 'Phantom',
      icon : '../../../assets/common/phantom.svg'
    },
    {
      label : 'Ledger',
      icon : '../../../assets/common/ledger.svg'
    },
    {
      label : 'Sollet',
      icon : '../../../assets/common/sollet.svg'
    },

  ]

  hiddenWallets : Array<WalletData> = [
    {
      label : 'Sollet ( Extension ) ',
      icon : '../../../assets/common/sollet_extension.png'
    },
    {
      label : 'Solflare',
      icon : '../../../assets/common/solflare.svg'
    },
    {
      label : 'Slope',
      icon : '../../../assets/common/slope.svg'
    },
  ]
}
