// 프로젝트의 엔트리 파일
//생성한 리액트 네이티브 앱은 여기서 시작

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//App이라는 컴포넌트 불러옴
//해당 컴포넌트 등록-> 이작업을 해야 우리가 만든 컴포넌트를 화면에 보여줄 수 있음
AppRegistry.registerComponent(appName, () => App);