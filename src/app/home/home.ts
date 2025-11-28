import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { RouterLink } from '@angular/router';

interface itemInfo {
  type: string,
  val: string,
  url: string
}

@Component({
  selector: 'app-home',
  imports: [ 
    SharedModules, RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

  items:itemInfo[]=[
    {type: '선 연결', val: '', url: '/line'},
    {type: '거리 측정', val: '', url: '/measureDistance'},
    {type: 'drilldown', val: '', url: '/drilldown'},
    {type: 'color 맵', val: '', url: '/color'},
    {type: '다중 선택', val: '', url: '/multiSelect'},
    {type: '포인트-심볼', val: '', url: '/pointSymbol'},
    {type: '맵-레이블', val: '', url: '/mapLabel'},
    {type: '디자인 맵', val: '', url: '/svgMap'},
    {type: '타일 맵', val: '', url: '/tileMap'},
  ];

  getImage(val: string): string {
    const str = '/assets/img' + val + '.png';
    return 'url(' + str + ')';
  }

  getColor(val: string): string {
    let color = '';

    switch(val) {
      case '기본기능':
        color = '#d04630';
        break;
      case '고급기능':
        color = '#009ecc';
        break;
      case '실무예제':
        color = '#4caf50';
        break;
    }

    return color;
  }
}
