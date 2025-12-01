import { Component } from '@angular/core';
import { SharedModules } from './shared/shared.module';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import loader from '@ibsheet/loader';

const ibmapLib = {
  name: 'ibmap',
  baseUrl: 'https://www.ibsheet.com/v8/assets/lib/ibmap/',
  dependentUrls: [
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  ],
}

// 로더 config
loader.config({
  registry: [ibmapLib]
});

loader.load()

@Component({
  selector: 'app-root',
  imports: [
    SharedModules,
    RouterOutlet, RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(library: FaIconLibrary) {
    // 사용할 아이콘을 라이브러리에 등록
    library.addIcons(faCode, faSearch, faGithub);
  }
  protected title = 'ng-guide-samples';
}
