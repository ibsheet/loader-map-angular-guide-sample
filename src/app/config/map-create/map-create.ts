import { Component, Inject } from '@angular/core';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-map-create',
  imports: [],
  templateUrl: './map-create.html',
  styleUrl: './map-create.css',
})
export class MapCreate {
  createOptions: any;

  constructor(
    @Inject(Object) createOptions: any) {
    this.createOptions = createOptions;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

/**
 * 공통 createMap 함수
 * @param createOptions loader.createMap에 전달할 옵션
 */
export async function createMap(createOptions: any): Promise<any> {
  return await loader.createMap(createOptions);
}

/**
 * 공통 removeMap 함수
 * @param mapInstance mapInstance 객체
 * @returns 
 */
export function removeMap(mapInstance: any): Promise<any> {
  return new Promise<void>((resolve, reject) => {
    try {
      // 먼저 chart instance 자체에 정리 메서드가 있는지 시도
      if (mapInstance) {
        loader.removeMap(mapInstance);
        mapInstance = null;
      }

      // 컴포넌트 측 참조 해제 권장 (호출자 responsibility)
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}