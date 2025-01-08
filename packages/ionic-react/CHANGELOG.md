# 21.0.0 (2025-01-08)

### 🚀 Features

- ⚠️  migrate workspace to Nx 20 ([#1136](https://github.com/jeffdetmer/nx-extensions/pull/1136))
- **ionic-react:** replace app generator by a config generator ([a808eaae](https://github.com/jeffdetmer/nx-extensions/commit/a808eaae))
- **nuxt:** add first alpha version plugin for nuxt ([94136e01](https://github.com/jeffdetmer/nx-extensions/commit/94136e01))
- migrate to nx 16.6 ([f6daab02](https://github.com/jeffdetmer/nx-extensions/commit/f6daab02))
- **ionic-react:** update to ionic 7 ([c2cdc8d4](https://github.com/jeffdetmer/nx-extensions/commit/c2cdc8d4))
- update to nx 15.2.0 ([eb16e414](https://github.com/jeffdetmer/nx-extensions/commit/eb16e414))
- **nxext:** update to Nx 14.8.5 ([c657fc83](https://github.com/jeffdetmer/nx-extensions/commit/c657fc83))
- **nxext:** move from @nrwl/devkit to @nxext/devkit ([a96856fd](https://github.com/jeffdetmer/nx-extensions/commit/a96856fd))
- **nxext:** use own e2e test runner ([4f49ac9c](https://github.com/jeffdetmer/nx-extensions/commit/4f49ac9c))
- **nxext:** move from @nrwl/devkit to @nxext/devkit ([be72c863](https://github.com/jeffdetmer/nx-extensions/commit/be72c863))
- **ionic-react:** add ionic-react plugin ([28e29a03](https://github.com/jeffdetmer/nx-extensions/commit/28e29a03))

### 🩹 Fixes

- add assert-not-using-ts-solution-setup to the generators ([#1140](https://github.com/jeffdetmer/nx-extensions/pull/1140))
- **ionic-react:** move nx deps to peer deps ([e14c576e](https://github.com/jeffdetmer/nx-extensions/commit/e14c576e))
- **ionic-react:** fix build target + fix e2e tests ([2c087507](https://github.com/jeffdetmer/nx-extensions/commit/2c087507))
- **nxext:** fix linting errors and add dependency linting ([303dd3f8](https://github.com/jeffdetmer/nx-extensions/commit/303dd3f8))

### ⚠️  Breaking Changes

- generator option `name` is replaced by `directory`, and the minimal required Nx version is `20.x`."

### 🧱 Updated Dependencies

- Updated capacitor to 21.0.0

### ❤️  Thank You

- Dominik Pieper @DominikPieper
- Edouard Bozon @edbzn
- Gion @gionkunz
- Jordan Hall @Jordan-Hall
- pawel-twardziak

## 20.0.3 (2024-12-09)

### 🧱 Updated Dependencies

- Updated capacitor to 20.1.0

## 20.0.2 (2024-11-04)

### 🧱 Updated Dependencies

- Updated capacitor to 20.0.2

## 20.0.1 (2024-10-15)

### 🩹 Fixes

- add assert-not-using-ts-solution-setup to the generators ([#1140](https://github.com/nxext/nx-extensions/pull/1140))

### 🧱 Updated Dependencies

- Updated capacitor to 20.0.1

### ❤️  Thank You

- pawel-twardziak

# 20.0.0 (2024-10-14)

### 🚀 Features

- ⚠️  migrate workspace to Nx 20 ([#1136](https://github.com/nxext/nx-extensions/pull/1136))

### ⚠️  Breaking Changes

- generator option `name` is replaced by `directory`, and the minimal required Nx version is `20.x`."

### 🧱 Updated Dependencies

- Updated capacitor to 20.0.0

### ❤️  Thank You

- pawel-twardziak

## 19.1.2 (2024-10-08)


### 🩹 Fixes

- **ionic-react:** fix build target + fix e2e tests ([2c087507](https://github.com/nxext/nx-extensions/commit/2c087507))

- **ionic-react:** move nx deps to peer deps ([e14c576e](https://github.com/nxext/nx-extensions/commit/e14c576e))


### 🧱 Updated Dependencies

- Updated capacitor to 19.1.2


### ❤️  Thank You

- Edouard Bozon @edbzn

## 19.1.1 (2024-10-07)


### 🧱 Updated Dependencies

- Updated capacitor to 19.1.1

# Changelog

# 14.0.0

## Features

- generate applications with Ionic v6

# 13.0.0

## Features

- support Nx 13

# 12.1.0

## Features

- restore Angular CLI support
- add `--standaloneConfig` to application generator to generate a `package.json` instead of updating the `workspace.json`

# 12.0.0

## Features

- support Nx 12
- plugin rewritten with `@nx/devkit` for better maintainability and future proofing for future Nx versions
- update Ionic to 5.8.3
- update list starter template

## BREAKING CHANGES

- Angular CLI is no longer officially supported
- the `init` generator has been removed and the functionaltiy has been moved to the `application` schematic

# 11.0.3

## Bug Fixes

- support Node 15 and npm 7

# 11.0.2

## Bug Fixes

- support Nx 11.3.0

# 11.0.1

## Bug Fixes

- support `angular.json` as well as `workspace.json` during migrations

# 11.0.0

## Features

- Nx 11 support (Nx 11 now required)
- add additional Ionic starter templates to application schematic
- support custom Nx layouts
- update Ionic to 5.5.2

## Bug Fixes

- fix generating an application in a sub-directory with Capacitor enabled

## BREAKING CHANGES

- remove `classComponent` option from `application` schematic (now defaults to functional components)
- remove `style` option from the `application` schematic (now defaults to CSS)
- remove `pascalCaseComponent` option from the `application` schematic (now defaults to true)
- remove `skipFormat` option from the `application` schematic (now defaults to false)
- remove `linter` option from the `application` schematic (now defaults to ESLint)
- remove `js` option from the `application` schematic (now defaults to true)

# 4.1.0

- initialize plugin with `@nxext/capacitor` 2.0.2

# 4.0.0

# Features

- update Ionic to 5.4.1
- add `ionic.config.json` to application
- update starter template

# BREAKING CHANGES

- don't install and configure Cypress Testing Library
- removed `disableSanitizer` flag from `application` schematic

# 3.1.0

# Features

- update `@nxext/capacitor` to 1.1.0
- update Ionic to 5.3.2
- update Ionicons to 5.1.2
- update `@testing-library/cypress` to 7.0.0
- update `@testing-library/jest-dom` to 5.11.4
- update `@testing-library/user-event` to 12.1.5

# BREAKING CHANGES

- `@testing-library/cypress`
  - `get` and `query` queries (which have been deprecated) have now been removed. Use `find` queries only.
  - **TS**: TypeScript type definitions have been brought into this module and no longer needs to be referenced from DefinitelyTyped

# 3.0.5

## Bug Fixes

- improve null checks when updating `tsconfig.json` in application schematic to support Nx 10

# 3.0.4

## Bug Fixes

- fix `Collection @nx/react not found` error if `@nx/react` is not added manually

# 3.0.3

## Bug Fixes

- add `@nx/react` version based on the users Nx version
- don't unnecessarily add `@nxext/ionic-react` dependency in `init` schematic
- add `@nxext/capacitor` 1.0.0 instead of `*`

# 3.0.2

## Bug Fixes

- properly initialize Capacitor plugin

# 3.0.1

## Features

- upgrade Ionic to 5.2.3

# 3.0.0

## Features

- generate Capacitor project with application by default
- upgrade `@testing-library/jest-dom` to 5.11.0
- upgrade `@testing-library/user-event` to 12.0.11

## Breaking Changes

- `@testing-library/user-event` was upgraded two major versions ([11.0.0](https://github.com/testing-library/user-event/releases/tag/v12.0.0)) ([12.0.0](https://github.com/testing-library/user-event/releases/tag/v12.0.0))

# 2.2.0

## Bug Fixes

- fix pascal case generate App unit test
- fix generating global styles for Emotion

## Features

- upgrade Ionic to 5.2.2
- add `--disableSanitizer` flag to application schematic to disable the [Ionic sanitizer](https://ionicframework.com/docs/techniques/security#sanitizing-user-input)

# 2.1.0

## Bug Fixes

- fix styled-components styles

## Features

- generate applications with ESLint by default

# 2.0.0

## Features

- extend `@nx/react` schematics
- import `@testing-library/jest-dom` commands for unit tests
- upgrade `@testing-library/jest-dom` to 5.5.0
- upgrade `@testing-library/cypress` to 6.0.0
- upgrade `@testing-library/user-event` to 10.0.1
- honor `unitTestRunner` flag
- set `@nxext/ionic-react` as the default collection if one is not set when generating an application
- honor `skipFormat` flag
- update Ionic starter template
  - [#1201](https://github.com/ionic-team/starters/pull/1201)
  - [#1202](https://github.com/ionic-team/starters/pull/1202)
  - [#1237](https://github.com/ionic-team/starters/pull/1237)

# 1.0.2

## Bug Fixes

- fix home page style import for pascal file name generated apps

## Features

- upgrade Ionic to 5.0.7
