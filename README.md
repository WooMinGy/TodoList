# TodoList

# **앱 구동**

## *공통*

node version 18

yarn (node_modules 설치)

.env 파일에 api url key value 아래와 같이 추가 필요

API_URL = 'http://3.35.194.197:8000'

## *Android*

1. yarn start
2. 기기 연결 후 yarn adb
3. yarn android:localDebug 

## *iOS*

1. cd ios && pod install
2. xcode 에서 xcworkspace open
3. simulator 작동(본인은 iPhone SE, iOS 17 사용함)
4. yarn start
5. 앱 빌드 아래 세가지 방법 중 선택(xcode build 추천)
   - xcode 에서 build button click
   - yarn ios:localDebug 
   - metro 에서 i 입력

## *폴더구조*

- **components** : Design System, theme, UI 관련 provider
- **containers** : screens 들의 UI 를 담당하는 Container, 그 안에서는 View 로 나뉘며 View에서는 Design System 에서 만든 component 를 가져다 쓰는 구조
- **hooks** : 앱 전반적으로 쓰일 hook이 담긴 폴더, 이 프로젝트에서는 useModal 밖에 없음
- **providers** : app 전체적으로 쓰이는 provider 들이 있는 곳, 이 프로젝트에서는 mmkv provider(Todo item 의 완료, 취소 토글 관리용)만 존재하나 보통 auth provider나 third party library 들(sentry, mixpanel, log rocket 등)을 관리함
- **redux** : redux 관련 코드들(store, action, reducer, saga)
- **screens** : app router 및 stack 들을 관리 screen 에서는 container를 가져다 쓰고 controller 및 그 안의 hooks에서 각 역할별로 필요한 로직을 불러오고 state 및 함수를 container에 props로 내려줌

VAC 패턴을 지키기 위해 노력함

## Challenging

1. 문제 : 기존에 setup 되어있던 project 기반으로 개발을 시작했는데 RN 버전이 너무 예전의 것이다 보니 최신 OS 들에서도 지원 될 수 있도록 0.73으로 업그레이드 시도
dependent 있는 package 들도 다 업그레이드 진행했는데 처음 보는 react navigation error 발생(react native 의 png 파일들을 읽어올 수 없다고 함)
원인 : project 셋업 및 metro.config 도 너무 예전 방식으로 쓰여있었음
해결 : 이전부터 react native 에서 발생할 수 있었던 에러여서 issues 참고해서 해결(아래 링크의 issue들)

https://github.com/facebook/react-native/issues/38282

https://github.com/react-navigation/react-navigation/issues/11192

2. redux를 개발자 취업 전 프로젝트에서 마지막으로 써보고 2년간 사용하지 않았고, saga를 처음 사용하다보니 처음 이해하는데 시간이 조금 걸렸음
