import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createMapOptions } from './tile-map.options';
import { createMap, removeMap } from '../../config/map-create/map-create';

@Component({
  selector: 'app-tile-map',
  imports: [SharedModules],
  templateUrl: './tile-map.html',
  styleUrl: './tile-map.css',
})
export class TileMap {
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
    var options = {
      "url": 'https://{s}.tile.openstreetmap.org',
      "center": [35.84, 127.75],
      "zoom": 5
    };

    mapInstance.map.loadTileMap(options);

    var capitalNames = [
      "서울특별시",
      "도쿄(일본)",
      "베이징(중국)",
      "타이베이(대만)",
      "하노이(베트남)",
      "방콕(태국)",
      "자카르타(인도네시아)",
      "마닐라(필리핀)",
      "쿠알라룸푸르(말레이시아)",
      "뉴델리(인도)",
      "울란바토르(몽골)",
    ];

    var capitalLatitudes = [
      37.5665, // 서울
      35.6895, // 도쿄
      39.9042, // 베이징
      25.0330, // 타이베이
      21.0285, // 하노이
      13.7563, // 방콕
      -6.2088, // 자카르타
      14.5995, // 마닐라
      3.1390,  // 쿠알라룸푸르
      28.6139, // 뉴델리
      47.8864, // 울란바토르
    ];

    var capitalLongitudes = [
      126.9780, // 서울
      139.6917, // 도쿄
      116.4074, // 베이징
      121.5654, // 타이베이
      105.8544, // 하노이
      100.5018, // 방콕
      106.8456, // 자카르타
      120.9842, // 마닐라
      101.6869, // 쿠알라룸푸르
      77.2090,  // 뉴델리
      106.9057, // 울란바토르
    ];
    var lineData: any = [];
    var pointData: any = [{
      "id": 'p-00' + 0,
      "name": capitalNames[0],
      "lat": capitalLatitudes[0],
      "lon": capitalLongitudes[0],
      "symbol": {
        "label": capitalNames[0],
        "style": {
          "labelPos": "top"
        }
      }
    }];
    for (var i = 1; i < capitalNames.length; i++) {
      var from = {
        "name": capitalNames[0],
        "lat": capitalLatitudes[0],
        "lon": capitalLongitudes[0]
      };

      var data = {
        "id": 'l-00' + i,
        "from": from,
        "to": {
          "name": capitalNames[i],
          "lat": capitalLatitudes[i],
          "lon": capitalLongitudes[i]
        },
        "style": {
          "border": {
            "style": "dashed",
            "animation": "stream 30s linear infinite"
          }
        },
        "label": {
          "x": capitalLongitudes[i] > capitalLongitudes[0] ? 10 : -4,
          "rotate": capitalLongitudes[i] > capitalLongitudes[0] ? 0 : 180,
        }
      };

      lineData.push(data);
      pointData.push({
        "id": 'p-00' + i,
        "name": capitalNames[i],
        "lat": capitalLatitudes[i],
        "lon": capitalLongitudes[i]
      })
    }

    mapInstance.line.add(lineData);
    mapInstance.point.add(pointData);
  }
}