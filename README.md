# myWeb
[개인프로젝트] 나만의 웹사이트 v2.0

# frontend
## 디렉토리 구조
```
backend/
├── src/
│   ├── server.js              # 서버 실행 진입점
│   ├── app.js                 # Express 앱 설정
│   ├── config/
│   │   └── index.js           # 환경 변수 설정
│   ├── routes/
│   │   ├── index.js           # 라우트 통합
│   │   └── health.routes.js   # 헬스체크 라우트
│   ├── controllers/
│   │   └── health.controller.js
│   ├── middleware/
│   │   └── errorHandler.js    # 에러/404 처리
│   └── utils/
│       └── ApiError.js        # 커스텀 에러 클래스
├── .env.example
├── package.json
└── .gitignore
```

## 실행 방법
```
cd frontend
copy .env.example .env   # 선택 사항
npm run dev              # http://localhost:5173
백엔드도 함께 실행하면 홈 페이지에서 /api/health 응답을 확인할 수 있습니다.
```

## 새 기능 추가 방법
```
목적	        위치
새 페이지       src/pages/ + src/router/index.js에 라우트 등록
재사용 UI       src/components/
API 호출        src/services/
공통 로직       src/composables/
전역 상태       src/store/
```

# backend 
## 디렉토리 구조
```
backend/
├── src/
│   ├── server.js              # 서버 실행 진입점
│   ├── app.js                 # Express 앱 설정
│   ├── config/
│   │   └── index.js           # 환경 변수 설정
│   ├── routes/
│   │   ├── index.js           # 라우트 통합
│   │   └── health.routes.js   # 헬스체크 라우트
│   ├── controllers/
│   │   └── health.controller.js
│   ├── middleware/
│   │   └── errorHandler.js    # 에러/404 처리
│   └── utils/
│       └── ApiError.js        # 커스텀 에러 클래스
├── .env.example
├── package.json
└── .gitignore
```

### 실행 방법
```
cd backend
cp .env.example .env   # Windows: copy .env.example .env
npm run dev            # 개발 (파일 변경 시 자동 재시작)
npm start              # 프로덕션
서버는 http://localhost:3000에서 실행되며, 헬스체크는 GET /api/health입니다.
```

### 새 API 추가 방법
```
src/controllers/ — 비즈니스 로직
src/routes/ — 라우트 정의
src/routes/index.js — 라우트 등록
```

### 설정
```
변수	        기본값
PORT            3000
NODE_ENV        development
CORS_ORIGIN     http://localhost:5173
```
