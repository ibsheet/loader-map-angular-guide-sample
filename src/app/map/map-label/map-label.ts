import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { getCreateMapOptions } from './map-label.options';
import { createMap, removeMap } from '../../config/map-create/map-create';

@Component({
  selector: 'app-map-label',
  imports: [SharedModules],
  templateUrl: './map-label.html',
  styleUrl: './map-label.css',
})
export class MapLabel {
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
      "url":"/assets/lib/ibmap/map/world/world.json",
      "loadfinish": function(data: any){
        mapInstance.map.show( 'label' );
      }
    });
  }
}
