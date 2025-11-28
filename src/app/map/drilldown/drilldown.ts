import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { getCreateMapOptions } from './drilldown.options';
import { createMap, removeMap } from '../../config/map-create/map-create';

@Component({
  selector: 'app-drilldown',
  imports: [SharedModules],
  templateUrl: './drilldown.html',
  styleUrl: './drilldown.css',
})
export class Drilldown {
  mapInstance: any;
  createMapOptions: any;

  async ngOnInit(): Promise<void> {
    // mapInstance를 저장할 임시 참조 객체 (클로저를 위한)
    const mapRef: any = {};

    // 1단계: mapRef를 전달하여 옵션 생성 (onclick 함수가 mapRef를 클로저로 캡처)
    this.createMapOptions = getCreateMapOptions(mapRef);

    // 2단계: 생성된 옵션으로 map 인스턴스 생성
    this.mapInstance = await createMap(this.createMapOptions);

    // 3단계: mapRef에 실제 mapInstance의 속성들을 복사 (onclick에서 사용)
    Object.assign(mapRef, this.mapInstance);

    if (this.mapInstance) {
      this.mapInstance.setSubtitle( "지도를 클릭해서 하위 지도로 이동할 수 있습니다.", {
        "fontSize": 14,
        "fontWeight": 500
      });
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
    mapInstance.map.load({
      "url": "/assets/lib/ibmap/map/new-kr/korea.json",
      "loadfinish": function ( ev: any ) {}
    });
  }
}
