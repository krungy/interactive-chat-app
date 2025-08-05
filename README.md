# Interactive Chat App

## 🚀 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand + Immer
- **Styling**: SCSS
- **WebSocket**: STOMP + SockJS

## 📦 설치 및 실행

### 필수 요구사항
- Node.js >= 20.10.0
- npm

### 설치
```bash
nvm use 20.10
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 빌드
```bash
npm run build
```

## 🛠️ 개발 도구

### 코드 포맷팅
```bash
npm run format:fix
```

### 린트 검사
```bash
npm run lint
```

### 린트 수정
```bash
npm run lint:fix
```

## 📁 프로젝트 구조

```
src/
├── assets/          # 스타일 및 정적 파일
├── components/      # 재사용 가능한 컴포넌트
│   ├── common/     # 공통 컴포넌트
├── pages/          # 페이지 컴포넌트
├── store/          # 상태 관리
├── utils/          # 유틸리티 함수
```