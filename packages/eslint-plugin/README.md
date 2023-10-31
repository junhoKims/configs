# @junhokims/eslint-plugin

react + typescript 환경 공용 ESLint Config.

## Install

pnpm 이용하여 설치

```
pnpm install
```

## Peer Dependencies

현재 커스텀 rules보다는 다른 plugins, configs를 사용하는 상황이므로 프로젝트에서 설치해야 하는
<br/>
dependencies가 필요하다.

### 필수 dependencies

- 현재 eslint는 8이상, prettier는 3이상을 요구한다.

```
pnpm add -D eslint 
pnpm add -D prettier
pnpm add -D eslint-plugin-import
pnpm add -D eslint-plugin-prettier
pnpm add -D eslint-config-prettier

// or 
pnpm add -D eslint prettier eslint-plugin-import eslint-plugin-prettier eslint-config-prettier
```


### Typescript 사용 시 dependencies

- 현재 typescript는 5이상을 요구한다.

```
pnpm add -D typescript
pnpm add -D @typescript-eslint/parser
pnpm add -D @typescript-eslint/eslint-plugin 
pnpm add -D eslint-import-resolver-typescript

// or 
pnpm add -D typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

### React 사용 시 dependencies

```
pnpm add -D eslint-plugin-react
pnpm add -D eslint-plugin-react-hooks

// or 
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks
```