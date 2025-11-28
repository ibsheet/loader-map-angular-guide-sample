import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createMapOptions } from './line.options';
import { createMap, removeMap } from '../../config/map-create/map-create';

@Component({
  selector: 'app-line',
  imports: [SharedModules],
  templateUrl: './line.html',
  styleUrl: './line.css',
})
export class Line {
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
    fetch("/assets/lib/ibmap/map/new-kr/korea.json").then(res=>res.json()).then(data=>{
      this.mapInstance.map._loadMap(data, (data: any) => {
        const points = [
          {
            "id": "p-001",
            "symbol": {
              "label" : "김포국제공항", // 심볼 주변에 표시될 레이블
              "type" : "diamond", // 심볼 모양
              "style":{
                "size": 100,
                "color" : "red",
                "labelSize": "12px",
                "labelPos": "top"
              }
            },
            "name": "김포국제공항",
            "lat": 37.558056,
            "lon": 126.790556
          },{
            "id": "p-002",
            "symbol": {
              "label" : "제주국제공항", // 심볼 주변에 표시될 레이블
              "type" : "cross", // 심볼 모양
              "style":{
                "size": 100,
                "color" : "rgb(180, 180, 80)",
                "labelSize": "12px",
                "labelPos": "right",
              }
            },
            "name": "제주국제공항",
            "lat": 33.511111,
            "lon": 126.492778
          },{
              "id": "p-003",
              "symbol": {
                "label" : "김해국제공항", // 심볼 주변에 표시될 레이블
                "type" : "square", // 심볼 모양
                "style":{
                  "size": 100,
                  "color" : "#6482AD",
                  "labelSize": "12px",
                  "labelPos": "right"
                }
              },
              "name": "김해국제공항",
              "lat": 35.179444,
              "lon": 128.938056
          }
        ];

        // 심볼 표현
        this.mapInstance.point.add(points);

        const lineData = [
          {
            // 추가하는 lind id
            "id": "l-001",
            "from": {  // 시작점
              "name": "김포국제공항",
              // 위도
              "lat": 37.558056,
              // 경도
              "lon": 126.790556
            },
            "to": {   // 끝점
              "name": "제주국제공항",
              // 위도
              "lat": 33.511111,
              // 경도
              "lon":126.492778
            },
            "style": {
              "border": {
                "width": 3, //연결선 굵기
                "color": "#FC4100", //연결선 색상
                "style": "dotted", //선 유형 "solid", "dashed", "dotted", "10 50"(선길이 공백길이)
                "animation": "stream 20s linear infinite" //애니메이션
              }
            },
            "label": {
              "text": "김포 -> 제주 노선 (주 14회)", //선 표시 레이블
            }
          },
          {
            "id": "l-002",
            "from": {  // 시작점
              "name": "김포국제공항",
              // 위도
              "lat": 37.558056,
              // 경도
              "lon": 126.790556
            },
            "to": {   // 끝점
              "name": "김해국제공항",
              // 위도
              "lat": 35.179444,
              // 경도
              "lon": 128.938056
            },
            "style": {
              "border": {
                "width": 3, //연결선 굵기
                "color": "#f8d50a", //연결선 색상
                "style": "solid", //선 유형 "solid", "dashed", "dotted", "10 50"(선길이 공백길이)
              }
            },
            "label": {
              "text": "김포 -> 김해 노선(주 7회)", //선 표시 레이블
              "textPosition": "right" //showDistance 사용시 거리정보 기준 레이블 표시 위치
            }
          },
          {
            "id": "l-003",
            "from": {   // 시작점
              "name": "김해국제공항",
              // 위도
              "lat": 35.179444,
              // 경도
              "lon": 128.938056
            },
            "to": {   // 끝점
              "name": "제주국제공항",
              // 위도
              "lat": 33.511111,
              // 경도
              "lon": 126.492778
            },
            "style": {
              "border": {
                "width": 3, //연결선 굵기
                "color": "#4793AF", //연결선 색상
                "style": "dashed", //선 유형 "solid", "dashed", "dotted", "10 50"(선길이 공백길이)
              }
            },
            "label": {
              "text": "김해 -> 제주 노선(주 1회)", //선 표시 레이블
            }
          },
        ];

        this.mapInstance.line.add(lineData);
      });
    });
  }
}
