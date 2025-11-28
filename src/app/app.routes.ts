import { Routes } from '@angular/router';
import { Home } from './home/home';

import { Line } from './map/line/line';
import { MeasureDistance } from './map/measure-distance/measure-distance';
import { Drilldown } from './map/drilldown/drilldown';
import { Color } from './map/color/color';
import { MultiSelect } from './map/multi-select/multi-select';
import { PointSymbol } from './map/point-symbol/point-symbol';
import { MapLabel } from './map/map-label/map-label';
import { SvgMap } from './map/svg-map/svg-map';
import { TileMap } from './map/tile-map/tile-map';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'line', component: Line},
    {path: 'measureDistance', component: MeasureDistance},
    {path: 'drilldown', component: Drilldown},
    {path: 'color', component: Color},
    {path: 'multiSelect', component: MultiSelect},
    {path: 'pointSymbol', component: PointSymbol},
    {path: 'mapLabel', component: MapLabel},
    {path: 'svgMap', component: SvgMap},
    {path: 'tileMap', component: TileMap},
];
