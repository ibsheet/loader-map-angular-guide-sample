# loader-map-angular-guide-sample 👋

## Guide sample using loader and ibmap, angular

## 📖 구조

👉 app.ts 에 loader.config 를 한 번 실행합니다. <br/>
👉 config 폴더 안에 chart-create.ts 가 있습니다. <br/>
👉 각 폴더명으로 샘플 컴포넌트가 존재합니다.

### 사용기술

👉 `@ibsheet/loader: 1.3.3` <br/>
👉 `Typescript, Angular, Angular-Material, FontAweSome, yarn`

### ✨설치방법

1. `clone` 을 받는다.
2. 해당프로젝트는 `yarn` 을 기준으로 만들어졌습니다. `yarn` 을 설치해줍니다. `npm install --global yarn`
3. `yarn` 을 이용하여 다운받는다.
4. `sheet-loader` 버전을 확인해보고, 필요한 로더 버전으로 업데이트한다. 해당 샘플 기준으로는 ^1.3.3 버전이 설치됩니다.
5. `public/assets` 에 ibmap 라이브러리가 들어있는 assets 폴더를 넣어줍니다. (app.ts 에서 ibmapLib의 baseUrl을 통해 파일위치는 변경할 수 있음.)
6. `yarn build` // build 파일 생성됨.
7. `yarn start` // start 로컬
