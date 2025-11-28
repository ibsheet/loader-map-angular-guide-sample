import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { getCreateMapOptions } from './multi-select.options';
import { createMap, removeMap } from '../../config/map-create/map-create';

@Component({
  selector: 'app-multi-select',
  imports: [SharedModules],
  templateUrl: './multi-select.html',
  styleUrl: './multi-select.css',
})
export class MultiSelect {
  mapInstance: any;
  createMapOptions: any;

  async ngOnInit(): Promise<void> {
    // mapInstance를 저장할 임시 참조 객체 (클로저를 위한)
    const mapRef: any = {}; 
    // 1단계: mapRef를 전달하여 옵션 생성 (onselect 함수가 mapRef를 클로저로 캡처)
    this.createMapOptions = getCreateMapOptions(mapRef);
    // 2단계: 생성된 옵션으로 map 인스턴스 생성
    this.mapInstance = await createMap(this.createMapOptions);
    // 3단계: mapRef에 실제 mapInstance의 속성들을 복사 (onselect에서 사용)
    Object.assign(mapRef, this.mapInstance);
      if (this.mapInstance) {
        this.loadMap(this.mapInstance);
      }
  }

  ngOnDestroy() {
    if (this.mapInstance) {
      removeMap(this.mapInstance);
      this.mapInstance = null;
      this.createMapOptions = null;
    }
  }

  loadMap(mapInstance: any) {
    mapInstance.map.load( {
      "url": "/assets/lib/ibmap/map/new-kr/51000/KR51000.json",
      "loadfinish": function (e: any) {
      }
    })
  }
}
