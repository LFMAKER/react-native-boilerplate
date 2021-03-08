<h1 align="center">Bem-vindo ao React Native Boilerplate 📄</h1>


# Sobre o projeto

Este projeto visa a criação de um template que possa ser utilizado no momento de criação de projetos utilizando React Native, visto que o processo de instalação e configuração das libs no início de um projeto podem gerar certa complexidade e muitas vezes até erros que atrasam o processo, atrapalhando assim o fluxo de desenvolvimento.

### Pré-requisitos
Antes de seguirmos para as configurações e uso do projeto, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso recomendo seguir o link abaixo:
[Ambiente React Native (Android/iOS)](https://react-native.rocketseat.dev/)

Será necessário também:

```bash
 - Node.Js version: "Recomendo acima da 10.21.0"
 - Cocoapods version: "1.9.3"
 - react-native-cli version: "2.0.1"
 - XCode version: "Necessário que seja acima da 11.1",
```

### Executando o projeto no Windows

- Não é possível utilizar o emulador IOS ou disposítivo IOS para desenvolvimento no windows, somente emulador android ou dispositivo físico android.

```bash
yarn install - "Instala as dependências do projeto"
yarn start - "Executa o Metro Bundler"
yarn android  - "Instala o app no emulador ou dispositivo físico"
```

### Executando o projeto no macOS

```bash
yarn install - "Instala as dependências do projeto"
yarn pod - "Instala as dependências descritas no Podfile"
yarn start - "Executa o Metro Bundler"
yarn android ou yarn ios - "Instala o app no emulador ou dispositivo físico"
```

## Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
reactnativeDefaultBoilerplate
 ┣ src
 ┃ ┣ assets
 ┃ ┃ ┗ images
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┣ logo-main.png
 ┃ ┃ ┃ ┣ logo-main@2x.png
 ┃ ┃ ┃ ┗ logo-main@3x.png
 ┃ ┣ components
 ┃ ┃ ┣ Button
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ styles.js
 ┃ ┃ ┣ DismissKeyboard
 ┃ ┃ ┃ ┗ index.js
 ┃ ┃ ┗ LoadingIndicator
 ┃ ┃ ┃ ┗ index.js
 ┃ ┣ config
 ┃ ┃ ┗ ReactotronConfig.js
 ┃ ┣ i18n
 ┃ ┃ ┣ locales
 ┃ ┃ ┃ ┣ en.js
 ┃ ┃ ┃ ┣ es.js
 ┃ ┃ ┃ ┣ fr.js
 ┃ ┃ ┃ ┗ ptbr.js
 ┃ ┃ ┗ index.js
 ┃ ┣ navigation
 ┃ ┃ ┣ RootNavigation.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ routes.js
 ┃ ┣ screens
 ┃ ┃ ┣ Dashboard
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ styles.js
 ┃ ┃ ┣ Home
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ styles.js
 ┃ ┃ ┗ SplashScreen
 ┃ ┃ ┃ ┣ index.js
 ┃ ┃ ┃ ┗ styles.js
 ┃ ┣ services
 ┃ ┃ ┗ api.js
 ┃ ┣ store
 ┃ ┃ ┣ modules
 ┃ ┃ ┃ ┣ auth
 ┃ ┃ ┃ ┃ ┣ actions.js
 ┃ ┃ ┃ ┃ ┣ reducer.js
 ┃ ┃ ┃ ┃ ┗ sagas.js
 ┃ ┃ ┃ ┣ rootReducer.js
 ┃ ┃ ┃ ┗ rootSaga.js
 ┃ ┃ ┣ createStore.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ persistReducers.js
 ┃ ┣ theme
 ┃ ┃ ┣ colors.js
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ metrics.js
 ┃ ┣ App.js
 ┃ ┗ index.js
 ┣ .buckconfig
 ┣ .env
 ┣ .eslintrc.js
 ┣ .flowconfig
 ┣ .gitattributes
 ┣ .gitignore
 ┣ .prettierrc.js
 ┣ .watchmanconfig
 ┣ app.json
 ┣ babel.config.js
 ┣ index.js
 ┣ jsconfig.json
 ┣ metro.config.js
 ┣ package.json
 ┗ yarn.lock
```

### Debug com Reactotron
O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows e pode ser feito o download em:
[Reactotron Download](https://github.com/infinitered/reactotron)

###  Extensões recomendadas para VSCode

![Alt Text](https://i.imgur.com/zNQFkgu.gif)


### Ajuda
Abaixo possue uma tabela com alguns links que o ajudará nesse projeto.


| | |
| ------------ | ------------ |
|  Configurar Ambiente |   [Ambiente React Native (Android/iOS)](https://react-native.rocketseat.dev/)|
|  React Native |   [React Native Docs](https://reactnative.dev/docs/getting-started) |
|  Styled-Components |   [Styled-Components Docs](https://styled-components.com)|
|  React Navigation  |   [React Navigation Docs](https://reactnavigation.org/docs/getting-started)|
|  Reactotron |   [Reactotron Download](https://github.com/infinitered/reactotron)|
|  Conhecendo o básico de Arquitetura Flux |   [Arquitetura Flux do Zero](https://www.youtube.com/watch?v=69e1MoUWE1g)|
|  Conhecendo o básico de Redux |   [Desvendando o Redux na prática](https://www.youtube.com/watch?v=u99tNt3TZf8)|
|  Conhecendo React Navigation 5.0 |   [Conhecendo React Navigation 5.0](https://www.youtube.com/watch?v=tjgCJgm8K3A)|
|  Redux-Saga: Gerenciando efeitos e ações  |   [Redux-Saga](https://bit.ly/3iYZ10h)|# react-native-boilerplate
