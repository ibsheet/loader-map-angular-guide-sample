import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createMapOptions } from './svg-map.options';
import { createMap, removeMap } from '../../config/map-create/map-create';

@Component({
  selector: 'app-svg-map',
  imports: [SharedModules],
  templateUrl: './svg-map.html',
  styleUrl: './svg-map.css',
})
export class SvgMap {
  mapInstance: any;

  async ngOnInit(): Promise<void> {
    this.mapInstance = await createMap(createMapOptions);
    if (this.mapInstance) {
      var map = document.querySelectorAll('input[name="map"]');
      var type = document.querySelectorAll('input[name="type"]');

      map.forEach(btn => {
        btn.addEventListener('change', () => {
          this.loadMap(this.mapInstance);
        })
      });
      type.forEach(btn => {
        btn.addEventListener('change', () => {
          this.loadMap(this.mapInstance);
        })
      })
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
    var map = document.querySelector('input[name="map"]:checked') as HTMLInputElement | null;
    var type = document.querySelector('input[name="type"]:checked') as HTMLInputElement | null;

    if (!map || !type) {
        console.error('Map or type input is not selected.');
        return;
    }

    var idx = parseInt(map.value);
    var path = parseInt(type.value) + 1;
    var url = [
      '/assets/lib/ibmap/map/design/type'+ path +'/seoul.svg',
      '/assets/lib/ibmap/map/design/type'+ path +'/korea.svg',
      '/assets/lib/ibmap/map/design/type'+ path +'/world.svg'
    ];
    
    var data = [
      '/assets/lib/ibmap/map/design/type'+ path +'/seoul.json',
      '/assets/lib/ibmap/map/design/type'+ path +'/korea.json',
      '/assets/lib/ibmap/map/design/type'+ path +'/world.json'
    ]

    if (idx === 2) {
        mapInstance.cfg.map.scale = 0.8;
    } else {
        mapInstance.cfg.map.scale = 1.2;
    }

    var hoverColors = ["#13ACE2", "#FFF", "#a1a1a17d"];
    var selectColors = ["#13ACE2", "#FFF", "#fff900"];

    // hover, select 색상 설정
    mapInstance.cfg.map.hover.style.backgroundColor = hoverColors[path - 1];
    mapInstance.cfg.map.select.style.backgroundColor = selectColors[path - 1];

    mapInstance.map.clear();
    mapInstance.map.clearData();
    mapInstance.tooltip._clearFixed();

    mapInstance.map.loadSvg(url[idx], data[idx]);
  }
}
