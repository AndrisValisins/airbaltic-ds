<span style="color:red;font-size:2em;line-heigt:2em">
# VIP and not production ready
</span>

# BT Components

Component library test project for npm

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Project Setup

```sh
yarn install
```

### Run Storybook

```sh
yarn storybook
```

### Build Storybook site

```sh
yarn build-storybook
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn  build
yarn test:e2e # or `yarn test:e2e:ci` for headless testing
```

### Run Tests with code coverage

```sh
yarn test:coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

### Publish package to npm

```sh
yarn publish
```

### Use package localy

```sh
yarn link - creates local link
```

install package to local project
```sh
yarn add bt-components
```
import in main.ts

```sh
import BTComponents from 'bt-components'
import "bt-components/dist/style.css"
...
app.use(BTComponents)

```
