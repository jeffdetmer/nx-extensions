# 21.0.0 (2025-01-08)

### 🚀 Features

- ⚠️  migrate workspace to Nx 20 ([#1136](https://github.com/jeffdetmer/nx-extensions/pull/1136))
- **stencil:** update Stencil to v4 ([94a03166](https://github.com/jeffdetmer/nx-extensions/commit/94a03166))
- **nuxt:** add first alpha version plugin for nuxt ([94136e01](https://github.com/jeffdetmer/nx-extensions/commit/94136e01))
- migrate to nx 16.6 ([f6daab02](https://github.com/jeffdetmer/nx-extensions/commit/f6daab02))
- **stencil:** support nx 16 ([97c57294](https://github.com/jeffdetmer/nx-extensions/commit/97c57294))
- **stencil:** add stencil plugin again ([0a2be1d9](https://github.com/jeffdetmer/nx-extensions/commit/0a2be1d9))
- **stencil:** use stencil 3 ([0ad50834](https://github.com/jeffdetmer/nx-extensions/commit/0ad50834))
- **stencil:** use @storybook/web-components for storybook config ([7b2388e2](https://github.com/jeffdetmer/nx-extensions/commit/7b2388e2))
- **stencil:** add new default options to stencil.config.ts ([bc18de4e](https://github.com/jeffdetmer/nx-extensions/commit/bc18de4e))
- update to nx 15.2.0 ([eb16e414](https://github.com/jeffdetmer/nx-extensions/commit/eb16e414))
- **nxext:** update to Nx 14.8.5 ([c657fc83](https://github.com/jeffdetmer/nx-extensions/commit/c657fc83))
- **nxext:** move from @nrwl/devkit to @nxext/devkit ([a96856fd](https://github.com/jeffdetmer/nx-extensions/commit/a96856fd))
- **nxext:** move from @nrwl/devkit to @nxext/devkit ([be72c863](https://github.com/jeffdetmer/nx-extensions/commit/be72c863))
- **stencil:** add babel config for storybook project ([4733e20a](https://github.com/jeffdetmer/nx-extensions/commit/4733e20a))
- **stencil:** adds defineCustomElements to angular outputtarget file ([60a9b2c6](https://github.com/jeffdetmer/nx-extensions/commit/60a9b2c6))
- **stencil:** importPath optional for make-lib-buildable command ([e1cceb1e](https://github.com/jeffdetmer/nx-extensions/commit/e1cceb1e))
- **stencil:** enables webpack 5 and babel 7 for storybook ([371605d4](https://github.com/jeffdetmer/nx-extensions/commit/371605d4))
- **ionic-angular:** add ionic angular plugin ([79c5f7ac](https://github.com/jeffdetmer/nx-extensions/commit/79c5f7ac))
- **stencil:** add generated module exports to angular lib ([aa08be1e](https://github.com/jeffdetmer/nx-extensions/commit/aa08be1e))
- **stencil:** add cypress as a e2e runner option ([daf81a4c](https://github.com/jeffdetmer/nx-extensions/commit/daf81a4c))
- **stencil:** add svelte outputtarget ([3589a5da](https://github.com/jeffdetmer/nx-extensions/commit/3589a5da))
- **stencil:** add new storybook executor to run storybook and serve for the lib ([be5391ea](https://github.com/jeffdetmer/nx-extensions/commit/be5391ea))
- **stencil:** add serve executor with correct teardown of child processes ([b6323d54](https://github.com/jeffdetmer/nx-extensions/commit/b6323d54))
- **stencil:** add lint target ([a2f8448c](https://github.com/jeffdetmer/nx-extensions/commit/a2f8448c))
- **stencil:** add linting command with eslint ([640a9400](https://github.com/jeffdetmer/nx-extensions/commit/640a9400))
- **stencil:** add ssg flag ([01832781](https://github.com/jeffdetmer/nx-extensions/commit/01832781))
- **stencil:** cleanup build options and add descriptions ([a633dc6e](https://github.com/jeffdetmer/nx-extensions/commit/a633dc6e))
- **stencil:** make buildable lib servable ([6f82816c](https://github.com/jeffdetmer/nx-extensions/commit/6f82816c))
- **stencil:** finalize Storybook generator using @storybook/html ([9b8d25bb](https://github.com/jeffdetmer/nx-extensions/commit/9b8d25bb))
- **stencil:** add storybook configuration ([ca2168e7](https://github.com/jeffdetmer/nx-extensions/commit/ca2168e7))
- **stencil:** add component option for library to prevent default component generation ([3e1baf85](https://github.com/jeffdetmer/nx-extensions/commit/3e1baf85))
- **stencil:** be able to disable e2e and unit test runners and remove the dependencies for that ([fe996fc9](https://github.com/jeffdetmer/nx-extensions/commit/fe996fc9))
- **stencil:** add utils for the new typescript insert options of nx11 ([29ac4d49](https://github.com/jeffdetmer/nx-extensions/commit/29ac4d49))
- **stencil:** autocalculate npm client for capacitor apps ([13972220](https://github.com/jeffdetmer/nx-extensions/commit/13972220))
- **tailwind:** add tailwindcss plugin ([c0266fca](https://github.com/jeffdetmer/nx-extensions/commit/c0266fca))
- **svelte:** add cypress to app schematic ([417eca23](https://github.com/jeffdetmer/nx-extensions/commit/417eca23))
- **svelte:** Add svelte plugin ([#75](https://github.com/jeffdetmer/nx-extensions/pull/75))
- **stencil:** add vue outputtarget ([02e98597](https://github.com/jeffdetmer/nx-extensions/commit/02e98597))
- **stencil:** add ionic app with capacitor feature ([7db143a1](https://github.com/jeffdetmer/nx-extensions/commit/7db143a1))

### 🩹 Fixes

- ts version with minor and patch being flexible ([60686d4f](https://github.com/jeffdetmer/nx-extensions/commit/60686d4f))
- **stencil:** align peer deps ([41a9bd78](https://github.com/jeffdetmer/nx-extensions/commit/41a9bd78))
- **stencil:** use dynamic import after ensuring package ([92b0630b](https://github.com/jeffdetmer/nx-extensions/commit/92b0630b))
- init js config on app generation and populate ignore files ([93c5508e](https://github.com/jeffdetmer/nx-extensions/commit/93c5508e))
- **stencil:** fix eslint configuration for app generator ([74182d4c](https://github.com/jeffdetmer/nx-extensions/commit/74182d4c))
- **stencil:** show project command on lib generation ([76f1b318](https://github.com/jeffdetmer/nx-extensions/commit/76f1b318))
- **stencil:** init js libs when creating stencil lib ([f476ef84](https://github.com/jeffdetmer/nx-extensions/commit/f476ef84))
- add assert-not-using-ts-solution-setup to the generators ([#1140](https://github.com/jeffdetmer/nx-extensions/pull/1140))
- **stencil:** export default for all generators ([7df02a4b](https://github.com/jeffdetmer/nx-extensions/commit/7df02a4b))
- **stencil:** support Nx `context.projectsConfigurations` ([#1120](https://github.com/jeffdetmer/nx-extensions/pull/1120))
- bump deps ([5d7fe4f1](https://github.com/jeffdetmer/nx-extensions/commit/5d7fe4f1))
- **stencil:** incude root project path for eslint-plugin migration ([79342761](https://github.com/jeffdetmer/nx-extensions/commit/79342761))
- **stencil:** incude import module update for eslint-plugin migration ([1b3d2ca5](https://github.com/jeffdetmer/nx-extensions/commit/1b3d2ca5))
- **stencil:** lint fix stencil package ([4db92182](https://github.com/jeffdetmer/nx-extensions/commit/4db92182))
- **stencil:** remove deprecated svetle generator ref ([542b73f3](https://github.com/jeffdetmer/nx-extensions/commit/542b73f3))
- **stencil:** remove gitignore addage ([b6e8e8be](https://github.com/jeffdetmer/nx-extensions/commit/b6e8e8be))
- **stencil:** resolve `validateConfig` error from @stencil/core@14.17.0 onward ([f5b87252](https://github.com/jeffdetmer/nx-extensions/commit/f5b87252))
- **stencil:** allow ArrayLiteralExpression in addCodeIntoArray ([f24475d5](https://github.com/jeffdetmer/nx-extensions/commit/f24475d5))
- **stencil:** Resolve exception when adding Angular output target ([#1065](https://github.com/jeffdetmer/nx-extensions/pull/1065))
- **stencil:** Resolve exception when adding Angular output target ([#1065](https://github.com/jeffdetmer/nx-extensions/pull/1065))
- **stencil:** Don't look for dependencies on same targetName when dependsOn is specified ([2337392d](https://github.com/jeffdetmer/nx-extensions/commit/2337392d))
- **nxext:** fix linting errors and add dependency linting ([303dd3f8](https://github.com/jeffdetmer/nx-extensions/commit/303dd3f8))
- **stencil:** update stencil peer dep to correct version ([928f54bb](https://github.com/jeffdetmer/nx-extensions/commit/928f54bb))
- **stencil:** fix tests and use correct ensurePackage function ([b1aada4a](https://github.com/jeffdetmer/nx-extensions/commit/b1aada4a))
- **stencil:** use exact version without ^ ([5ba4ec3b](https://github.com/jeffdetmer/nx-extensions/commit/5ba4ec3b))
- **stencil:** fix cypress is not found ([29997daf](https://github.com/jeffdetmer/nx-extensions/commit/29997daf))
- **stencil:** use dynamic import for dependent plugins ([29096003](https://github.com/jeffdetmer/nx-extensions/commit/29096003))
- **stencil:** don't change the package.json inside the lib/app dir ([6d3b09bd](https://github.com/jeffdetmer/nx-extensions/commit/6d3b09bd))
- **stencil:** use correct import and not globally from @nrwl/workspace ([32ef7889](https://github.com/jeffdetmer/nx-extensions/commit/32ef7889))
- **stencil:** fix the import of the autoprefixer ([ae77a4e9](https://github.com/jeffdetmer/nx-extensions/commit/ae77a4e9))
- **stencil:** fix the import of the stylesheets plugin ([4ff96316](https://github.com/jeffdetmer/nx-extensions/commit/4ff96316))
- **stencil:** fix serve process teardown ([2a0b11fe](https://github.com/jeffdetmer/nx-extensions/commit/2a0b11fe))
- apply linting ([d924471a](https://github.com/jeffdetmer/nx-extensions/commit/d924471a))
- **stencil:** fix relative path calculation ([fa05795e](https://github.com/jeffdetmer/nx-extensions/commit/fa05795e))
- **stencil:** set jest-config version for jest 26 ([4da96d19](https://github.com/jeffdetmer/nx-extensions/commit/4da96d19))
- **stencil:** add importPath for outputtargets ([5cb912a5](https://github.com/jeffdetmer/nx-extensions/commit/5cb912a5))
- **stencil:** dynamically import external generators ([0a8e1530](https://github.com/jeffdetmer/nx-extensions/commit/0a8e1530))
- **stencil:** change stencil dependency resolution ([4d05958b](https://github.com/jeffdetmer/nx-extensions/commit/4d05958b))
- **stencil:** fix e2e testing ([48b89427](https://github.com/jeffdetmer/nx-extensions/commit/48b89427))
- **stencil:** fix skipFormat for multiple generators ([e238fa04](https://github.com/jeffdetmer/nx-extensions/commit/e238fa04))
- **nxext:** use utils from tao instead of workspace ([1c2f7f0b](https://github.com/jeffdetmer/nx-extensions/commit/1c2f7f0b))
- **stencil:** fix windows paths to prevent broken builds ([2cd6f9c3](https://github.com/jeffdetmer/nx-extensions/commit/2cd6f9c3))
- **stencil:** remove accidentally used function from nx-plugin ([2998adef](https://github.com/jeffdetmer/nx-extensions/commit/2998adef))
- **stencil:** remove tailwind peerDependency ([e89c0aab](https://github.com/jeffdetmer/nx-extensions/commit/e89c0aab))
- **stencil:** be able to import buildable libs ([b308e575](https://github.com/jeffdetmer/nx-extensions/commit/b308e575))
- **stencil:** fix add outputTargets for make-lib-buildable ([166d88f2](https://github.com/jeffdetmer/nx-extensions/commit/166d88f2))
- **stencil:** fix vue outputtarget ([44c4a19b](https://github.com/jeffdetmer/nx-extensions/commit/44c4a19b))
- **stencil:** fix make-buildable to add output targets ([1f36b136](https://github.com/jeffdetmer/nx-extensions/commit/1f36b136))
- **stencil:** fix wrong paths for e2e testing in package.json ([0d26525e](https://github.com/jeffdetmer/nx-extensions/commit/0d26525e))
- **nxext:** fix stencil test not finding spec files ([c76c1a57](https://github.com/jeffdetmer/nx-extensions/commit/c76c1a57))
- **nxext:** use stencil 1.15.0 as a hard dependency, cause 1.16 blocks for now ([09e1bcce](https://github.com/jeffdetmer/nx-extensions/commit/09e1bcce))
- **nxext:** reformat code ([157bf2d3](https://github.com/jeffdetmer/nx-extensions/commit/157bf2d3))

### ⚠️  Breaking Changes

- generator option `name` is replaced by `directory`, and the minimal required Nx version is `20.x`."

### 🧱 Updated Dependencies

- Updated common to 21.0.0

### ❤️  Thank You

- Dan Cork
- Dominik Pieper @DominikPieper
- Edouard Bozon @edbzn
- francescocaveglia @francescocaveglia
- Gion @gionkunz
- Jordan Hall @Jordan-Hall
- Maarten Van Hoof @mrtnvh
- Marc Kassay
- mikemosco @mikemosco
- Paweł Twardziak
- pawel-twardziak
- Sambath Kumar Logakrishnan @64BitAsura
- santhosh
- Sebastian Duque Gutierrez @sebastiandg7
- Sharief Orie

## 20.0.6 (2024-10-21)

### 🩹 Fixes

- ts version with minor and patch being flexible ([60686d4f](https://github.com/nxext/nx-extensions/commit/60686d4f))

### 🧱 Updated Dependencies

- Updated common to 20.0.1

### ❤️  Thank You

- Paweł Twardziak

## 20.0.5 (2024-10-17)

### 🩹 Fixes

- **stencil:** align peer deps ([41a9bd78](https://github.com/nxext/nx-extensions/commit/41a9bd78))
- **stencil:** use dynamic import after ensuring package ([92b0630b](https://github.com/nxext/nx-extensions/commit/92b0630b))
- init js config on app generation and populate ignore files ([93c5508e](https://github.com/nxext/nx-extensions/commit/93c5508e))
- **stencil:** fix eslint configuration for app generator ([74182d4c](https://github.com/nxext/nx-extensions/commit/74182d4c))

### ❤️  Thank You

- Paweł Twardziak

## 20.0.4 (2024-10-16)

### 🧱 Updated Dependencies

- Updated common to 20.0.0

## 20.0.3 (2024-10-16)

### 🩹 Fixes

- **stencil:** show project command on lib generation ([76f1b318](https://github.com/nxext/nx-extensions/commit/76f1b318))
- **stencil:** init js libs when creating stencil lib ([f476ef84](https://github.com/nxext/nx-extensions/commit/f476ef84))

### ❤️  Thank You

- Paweł Twardziak

## 20.0.2 (2024-10-15)

### 🩹 Fixes

- add assert-not-using-ts-solution-setup to the generators ([#1140](https://github.com/nxext/nx-extensions/pull/1140))

### ❤️  Thank You

- pawel-twardziak

## 20.0.1 (2024-10-14)

### 🩹 Fixes

- **stencil:** export default for all generators ([7df02a4b](https://github.com/nxext/nx-extensions/commit/7df02a4b))

### ❤️  Thank You

- Paweł Twardziak

# 20.0.0 (2024-10-14)

### 🚀 Features

- ⚠️  migrate workspace to Nx 20 ([#1136](https://github.com/nxext/nx-extensions/pull/1136))

### ⚠️  Breaking Changes

- generator option `name` is replaced by `directory`, and the minimal required Nx version is `20.x`."

### ❤️  Thank You

- pawel-twardziak

## 19.0.2 (2024-10-08)


### 🩹 Fixes

- **stencil:** support Nx `context.projectsConfigurations` ([#1120](https://github.com/nxext/nx-extensions/pull/1120))


### ❤️  Thank You

- francescocaveglia @francescocaveglia

## 19.0.1 (2024-10-07)


### 🩹 Fixes

- bump deps ([5d7fe4f1](https://github.com/nxext/nx-extensions/commit/5d7fe4f1))


### ❤️  Thank You

- Edouard Bozon @edbzn