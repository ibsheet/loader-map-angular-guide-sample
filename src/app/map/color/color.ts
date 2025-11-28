import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createMapOptions } from './color.options';
import { createMap, removeMap } from '../../config/map-create/map-create';

@Component({
  selector: 'app-color',
  imports: [SharedModules],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  mapInstance: any;

  async ngOnInit(): Promise<void> {
    this.mapInstance = await createMap(createMapOptions);
    if (this.mapInstance) {
      this.loadMap(this.mapInstance);
    }
  }

  ngOnDestroy(): void {
    if (this.mapInstance) {
      removeMap(this.mapInstance);
      this.mapInstance = null;
    }
  }

  loadMap(mapInstance: any) {
    //2024년 2/4 분기 기준
    const etcData: any = {
      "종로구":	139378,
      "중구":	121322,
      "용산구":	212175,
      "성동구":	277090,
      "광진구":	335335,
      "동대문구":	340983,
      "중랑구":	382284,
      "성북구":	424916,
      "강북구":	287490,
      "도봉구":	360722,
      "노원구":	497237,
      "은평구":	466474,
      "서대문구":	305857,
      "마포구":	363679,
      "양천구":	435548,
      "강서구":	562550,
      "구로구":	392311,
      "금천구":	227457,
      "영등포구":	374985,
      "동작구":	378360,
      "관악구":	481872,
      "서초구":	407768,
      "강남구":	569154,
      "송파구":	653989,
      "강동구":	459389
    }

    mapInstance.map.load({
      "url": "/assets/lib/ibmap/map/new-kr/11000/KR11000.json",
      "loadfinish": function ( e: any ) {
        var data: any = {},
        unit: any = {};

        e.mapData.features.forEach(function(i: any) {
          unit = i.properties;
          data[ unit.id ] = {
            value: etcData[unit.name]
          };
          unit.etcData = etcData[unit.name];
        });
        mapInstance.map.setData( data );
      }
    })
  }
}
