# Briefly-FE

Expo Router 기반의 Briefly 프론트엔드 프로젝트입니다. 현재 Expo SDK 57과 React Native 0.86을 사용하며, Android, iOS, Web을 대상으로 실행할 수 있습니다.

## 요구 사항

- Node.js `22.13.x` 이상
- pnpm `10.29.3`
- Android 실행: Android Studio와 Android Emulator 또는 Expo Go가 설치된 Android 기기
- iOS 실행: macOS, Xcode와 iOS Simulator 또는 Expo Go가 설치된 iOS 기기

Expo SDK 버전에 맞는 Node.js 및 플랫폼 요구 사항은 [Expo SDK 57 문서](https://docs.expo.dev/versions/v57.0.0/)를 참고합니다.

## 설치

```bash
git clone <repository-url>
cd Briefly-FE

# pnpm이 설치되어 있지 않은 경우
corepack enable

pnpm install
```

현재 `pnpm-lock.yaml`은 `package.json`의 의존성 목록과 동기화되지 않은 상태이므로 `pnpm install --frozen-lockfile`은 실패할 수 있습니다. 잠금 파일을 갱신하지 않고 로컬 실행만 확인하려면 다음 명령을 사용할 수 있습니다.

```bash
pnpm install --lockfile=false
```

## 개발 서버 실행

### 기본 실행

```bash
pnpm start
```

Expo CLI가 표시하는 QR 코드를 Expo Go로 스캔하거나, 실행 중인 CLI에서 다음 단축키를 사용합니다.

- `a`: Android Emulator 또는 연결된 Android 기기에서 실행
- `i`: iOS Simulator에서 실행
- `w`: Web 브라우저에서 실행

컴퓨터와 실제 기기가 같은 네트워크에 있어야 합니다. LAN 연결이 되지 않으면 터널 모드로 실행합니다.

```bash
pnpm exec expo start --tunnel
```

### 플랫폼별 실행

```bash
# Android
pnpm android

# iOS (macOS에서만 가능)
pnpm ios

# Web
pnpm web
```

이 프로젝트는 현재 `expo-dev-client`와 네이티브 `android/`, `ios/` 디렉터리를 포함하지 않습니다. 따라서 기본 개발 실행은 Expo Go를 사용합니다. 커스텀 네이티브 모듈, 앱 링크, 원격 푸시 알림 등 Expo Go에 포함되지 않은 네이티브 기능이 필요해지면 [Development Build](https://docs.expo.dev/develop/development-builds/introduction/)를 별도로 구성해야 합니다.

## 웹 빌드

현재 `build` 스크립트는 다음 명령으로 구성되어 있습니다.

```bash
pnpm build
```

위 명령은 `expo export --platform all`을 실행하며, `dist/` 디렉터리에 정적 웹 결과물과 Android/iOS/Web JavaScript 번들을 생성합니다. `dist/`는 Git에 커밋하지 않습니다.

웹에서만 export하려면 다음과 같이 실행합니다.

```bash
pnpm exec expo export --platform web
```

생성된 `dist/` 디렉터리를 정적 웹 호스팅 서비스에 배포할 수 있습니다. Expo Router의 정적 렌더링 설정은 [`app.json`](app.json)의 `web.output: "static"`에 정의되어 있습니다.

## 네이티브 앱 빌드

`pnpm build`는 APK나 IPA를 생성하지 않습니다. Android APK/AAB 또는 iOS IPA가 필요한 경우 EAS Build를 초기화한 후 빌드합니다.

```bash
# EAS CLI 로그인
pnpm dlx eas-cli@latest login

# 프로젝트에 EAS 설정 생성
pnpm dlx eas-cli@latest init

# Android 빌드
pnpm dlx eas-cli@latest build --platform android

# iOS 빌드
pnpm dlx eas-cli@latest build --platform ios
```

EAS 설정과 빌드 프로필은 `eas.json`에 저장됩니다. 스토어 제출이 필요한 경우에는 [Expo EAS Build 문서](https://docs.expo.dev/build/introduction/)와 각 스토어의 인증 정보를 확인합니다.

## 코드 품질 검사

```bash
# TypeScript 타입 검사
pnpm typecheck

# ESLint 검사
pnpm lint

# Prettier 포맷팅
pnpm format
```

## 주요 명령어

| 명령어           | 설명                             |
| ---------------- | -------------------------------- |
| `pnpm start`     | Expo 개발 서버 실행              |
| `pnpm android`   | Android에서 개발 서버 실행       |
| `pnpm ios`       | iOS Simulator에서 개발 서버 실행 |
| `pnpm web`       | Web에서 개발 서버 실행           |
| `pnpm build`     | 전체 플랫폼 정적 export          |
| `pnpm typecheck` | TypeScript 타입 검사             |
| `pnpm lint`      | ESLint 검사                      |
| `pnpm format`    | Prettier 포맷팅                  |

## 참고 문서

- [Expo SDK 57 문서](https://docs.expo.dev/versions/v57.0.0/)
- [Expo 개발 시작하기](https://docs.expo.dev/get-started/start-developing/)
- [Expo Router 문서](https://docs.expo.dev/router/introduction/)
- [Expo EAS Build 문서](https://docs.expo.dev/build/introduction/)
