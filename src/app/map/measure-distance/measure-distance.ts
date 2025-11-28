import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { getCreateMapOptions } from './measure-distance.options';
import { createMap, removeMap } from '../../config/map-create/map-create';

@Component({
  selector: 'app-measure-distance',
  imports: [SharedModules],
  templateUrl: './measure-distance.html',
  styleUrl: './measure-distance.css',
})
export class MeasureDistance {
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
      this.mapInstance.setSubtitle( "지도를 클릭하여 거리를 측정해 보세요.", {
        "fontSize": 14,
        "fontWeight": 500
      });
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
    mapInstance.map.load({url:"/assets/lib/ibmap/map/new-kr/korea.json", 
      loadfinish:function(e: any){
        let colors: any = {};
        for(let i = 0 ; i < e.mapData.features.length ; i++ ) {
          if(e.mapData.features[i].id == "KR30000"){
            colors[e.mapData.features[i].id] = {style:{backgroundColor: "#437FEA"}};
          }else if(e.mapData.features[i].id == "KR26000"){
            colors[e.mapData.features[i].id] = {style:{backgroundColor: "#437FEA"}};
          }
        }
        mapInstance.map.setData( colors );

        const lineData = [
          {
            "id": "kh99985",
            "from": {
              "name": "대전 중구",
              "lon": 127.37481651832546, 
              "lat": 36.339568545436094
            },
            "to": {
              "name": "부산 해운대",
              "lon": 129.14995772145545, 
              "lat": 35.16642343299291
            },
            "style": {
              "border": {
                "width": 3,
                "color": "#9A7E6F",
                "style": "dotted", // "solid", "dashed", "dotted", "10 50"(선길이 공백길이)
                "animation": "stream 20s linear infinite"
              },
            },
            "label":{
              "text": "대전 중구 -> 부산 해운대",
              "textPosition": 1, //거리정보 보다 앞에 text 표시
              "showDistance": 1
            }
          }
        ];
        mapInstance.line.add(lineData);
        const symbolData = [
          {
            "id": "ko001",
            "name": "대전중구",
            "lon": 127.37481651832546, 
            "lat": 36.339568545436094,
            "symbol": {
              "type":'circle',
              "label":"대전 중구",
              "style":{
                "color":"#fff",
                "size":50
              }
            }
          },
          {
            "id": "ko002",
            "name": "부산 해운대",
            "lon": 129.14995772145545, 
            "lat": 35.16642343299291,
            "symbol": {
              "type":'circle',
              "label":"부산 해운대",
              "style":{
                "color":"#fff",
                "size":50
              }
            }
          }
        ];
        mapInstance.point.clear();
        mapInstance.point.add( symbolData );
      } //end loadfinish
    });
  }
}
