# myWeb
[개인프로젝트] 나만의 웹사이트 v2.0

# 디렉토리 구조
src (소스코드) : Vue 컴포넌트, 페이지, 라우터 등을 포함하는 핵심 디렉토리<br>
components : 버튼, 카드, 모달 등 재사용 가능한 UI 요소를 담는 곳<br>
pages : 개별 페이지 단위의 Vue 파일 관리<br>
layouts : 헤더, 푸터 등 페이지의 공통 레이아웃 관리<br>
router : Vue Router 설정 파일을 관리 (index / router)<br>
store : Pinia, Vuex와 같은 상태 관리 라이브러리를 사용할 경우 상태 관련 코드를 담는곳<br>
composables : Vue Composition API의 setup()에서 재사용할 로직을 정의<br>
services : api 요청을 담당하는 함수들을 분리하여 관리<br>
utils : 포맷팅, 날짜 변환 등의 헬퍼 함수를 모아둠.<br>
styles : 전역 CSS 관리<br>
tests : 단위 테스트 관련 코드 저장<br>
vite.config.js : Vite 빌드 설정을 정의<br>
