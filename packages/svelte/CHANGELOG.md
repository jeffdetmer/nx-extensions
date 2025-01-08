# 21.0.0 (2025-01-08)

### 🚀 Features

- ⚠️  migrate workspace to Nx 20 ([#1136](https://github.com/jeffdetmer/nx-extensions/pull/1136))
- **svelte:** support for projectNameAndRootFormat ([8a8f0d9b](https://github.com/jeffdetmer/nx-extensions/commit/8a8f0d9b))
- **svelte:** add project graph support ([729bb533](https://github.com/jeffdetmer/nx-extensions/commit/729bb533))
- migrate to nx 16.6 ([f6daab02](https://github.com/jeffdetmer/nx-extensions/commit/f6daab02))
- update to nx 15.2.0 ([eb16e414](https://github.com/jeffdetmer/nx-extensions/commit/eb16e414))
- **nxext:** update to Nx 14.8.5 ([c657fc83](https://github.com/jeffdetmer/nx-extensions/commit/c657fc83))
- **nxext:** move from @nrwl/devkit to @nxext/devkit ([a96856fd](https://github.com/jeffdetmer/nx-extensions/commit/a96856fd))
- **nxext:** move from @nrwl/devkit to @nxext/devkit ([be72c863](https://github.com/jeffdetmer/nx-extensions/commit/be72c863))
- **svelte:** make Vitest default unitTestRunner ([e2ac7d1e](https://github.com/jeffdetmer/nx-extensions/commit/e2ac7d1e))
- **svelte:** add storybook configuration ([b684e30a](https://github.com/jeffdetmer/nx-extensions/commit/b684e30a))
- **svelte:** use the latest vitest package ([a5d87359](https://github.com/jeffdetmer/nx-extensions/commit/a5d87359))
- **svelte:** add vitest as a testrunner ([d3ebbc9f](https://github.com/jeffdetmer/nx-extensions/commit/d3ebbc9f))
- **svelte:** use serve-proxy instead of sere rollup package ([a90622a3](https://github.com/jeffdetmer/nx-extensions/commit/a90622a3))
- **svelte:** add publishable ([71782f9a](https://github.com/jeffdetmer/nx-extensions/commit/71782f9a))
- **svelte:** add vite as a alternative bundler ([2a67a9a0](https://github.com/jeffdetmer/nx-extensions/commit/2a67a9a0))
- **sveltekit:** add first draft of the sveltekit plugin ([6ae4ce8f](https://github.com/jeffdetmer/nx-extensions/commit/6ae4ce8f))
- **svelte:** introduce svelte.config.js for custom configs ([96682247](https://github.com/jeffdetmer/nx-extensions/commit/96682247))
- **svelte:** add generated component to barrel in library ([1c948026](https://github.com/jeffdetmer/nx-extensions/commit/1c948026))
- **svelte:** rebuild svelte plugin for nx11 ([68d942be](https://github.com/jeffdetmer/nx-extensions/commit/68d942be))
- **svelte:** add option to configure sveltePreprocessor ([56d59cb6](https://github.com/jeffdetmer/nx-extensions/commit/56d59cb6))
- **svelte:** add rollupconfig flag to builder ([f9b9e537](https://github.com/jeffdetmer/nx-extensions/commit/f9b9e537))
- **svelte:** add cypress to app schematic ([417eca23](https://github.com/jeffdetmer/nx-extensions/commit/417eca23))
- **svelte:** add jest for apps and component generation ([0b138c35](https://github.com/jeffdetmer/nx-extensions/commit/0b138c35))
- **svelte:** Add svelte plugin ([#75](https://github.com/jeffdetmer/nx-extensions/pull/75))

### 🩹 Fixes

- ts version with minor and patch being flexible ([60686d4f](https://github.com/jeffdetmer/nx-extensions/commit/60686d4f))
- add assert-not-using-ts-solution-setup to the generators ([#1140](https://github.com/jeffdetmer/nx-extensions/pull/1140))
- **svelte:** export default for all generators ([a931f048](https://github.com/jeffdetmer/nx-extensions/commit/a931f048))
- package version + nx dependencies ([5bc4c2e4](https://github.com/jeffdetmer/nx-extensions/commit/5bc4c2e4))
- bump deps ([5d7fe4f1](https://github.com/jeffdetmer/nx-extensions/commit/5d7fe4f1))
- fix workspace format issues ([717d29a0](https://github.com/jeffdetmer/nx-extensions/commit/717d29a0))
- **nxext:** fix linting errors and add dependency linting ([303dd3f8](https://github.com/jeffdetmer/nx-extensions/commit/303dd3f8))
- **ionic-angular:** fix unit tests ([e9ed1a22](https://github.com/jeffdetmer/nx-extensions/commit/e9ed1a22))
- **svelte:** fix peerdependency of rxjs-for-await ([afe32306](https://github.com/jeffdetmer/nx-extensions/commit/afe32306))
- **svelte:** fix windows tests ([9a00a1c2](https://github.com/jeffdetmer/nx-extensions/commit/9a00a1c2))
- **svelte:** make cypress executable with vite ([7a2f762e](https://github.com/jeffdetmer/nx-extensions/commit/7a2f762e))
- **svelte:** remove useless /public/ in static assets path ([1568a2ad](https://github.com/jeffdetmer/nx-extensions/commit/1568a2ad))
- **svelte:** change wrong migration path ([00c88e74](https://github.com/jeffdetmer/nx-extensions/commit/00c88e74))
- **svelte:** add migration for the new index.html ([62ce6175](https://github.com/jeffdetmer/nx-extensions/commit/62ce6175))
- **svelte:** fix wrong generation of jest tests ([cd1875cc](https://github.com/jeffdetmer/nx-extensions/commit/cd1875cc))
- **svelte:** add svelte config if doesn't exist ([5449c7fc](https://github.com/jeffdetmer/nx-extensions/commit/5449c7fc))
- **svelte:** add svelte migration to vite ([fabbe841](https://github.com/jeffdetmer/nx-extensions/commit/fabbe841))
- **svelte:** remove angular-devkit deps ([ad06d8c1](https://github.com/jeffdetmer/nx-extensions/commit/ad06d8c1))
- **svelte:** change the check for headers to a more error safe way ([1c259b2f](https://github.com/jeffdetmer/nx-extensions/commit/1c259b2f))
- **svelte:** set cli: nx in schema.json ([ef4f5d89](https://github.com/jeffdetmer/nx-extensions/commit/ef4f5d89))
- **svelte:** fix svelte library barrel export ([8216a317](https://github.com/jeffdetmer/nx-extensions/commit/8216a317))
- **svelte:** fix wrong dependency ([486a8373](https://github.com/jeffdetmer/nx-extensions/commit/486a8373))
- **svelte:** add @nxext/vite dependency ([addc2b64](https://github.com/jeffdetmer/nx-extensions/commit/addc2b64))
- **svelte:** release 11.2.1 ([b10ec5ed](https://github.com/jeffdetmer/nx-extensions/commit/b10ec5ed))
- **svelte:** add generated library to tsconfig ([7574ffd7](https://github.com/jeffdetmer/nx-extensions/commit/7574ffd7))
- **svelte:** remove accidentally added log entry ([8bac2146](https://github.com/jeffdetmer/nx-extensions/commit/8bac2146))
- **svelte:** with directories the cypress config not created properly ([94d43b80](https://github.com/jeffdetmer/nx-extensions/commit/94d43b80))

### ⚠️  Breaking Changes

- generator option `name` is replaced by `directory`, and the minimal required Nx version is `20.x`."

### ❤️  Thank You

- Dominik Pieper
- Edouard Bozon
- Jordan Hall
- Josh VanAllen @joshvanallen
- Marvin Luchs
- Oscar Marion
- Paweł Twardziak
- pawel-twardziak

## 20.0.3 (2024-10-21)

### 🩹 Fixes

- ts version with minor and patch being flexible ([60686d4f](https://github.com/nxext/nx-extensions/commit/60686d4f))

### ❤️  Thank You

- Paweł Twardziak

## 20.0.2 (2024-10-15)

### 🩹 Fixes

- add assert-not-using-ts-solution-setup to the generators ([#1140](https://github.com/nxext/nx-extensions/pull/1140))

### ❤️  Thank You

- pawel-twardziak

## 20.0.1 (2024-10-14)

### 🩹 Fixes

- **svelte:** export default for all generators ([a931f048](https://github.com/nxext/nx-extensions/commit/a931f048))

### ❤️  Thank You

- Paweł Twardziak

# 20.0.0 (2024-10-14)

### 🚀 Features

- ⚠️  migrate workspace to Nx 20 ([#1136](https://github.com/nxext/nx-extensions/pull/1136))

### ⚠️  Breaking Changes

- generator option `name` is replaced by `directory`, and the minimal required Nx version is `20.x`."

### ❤️  Thank You

- pawel-twardziak

## 19.0.2 (2024-10-10)


### 🩹 Fixes

- package version + nx dependencies ([5bc4c2e4](https://github.com/nxext/nx-extensions/commit/5bc4c2e4))


### ❤️  Thank You

- Edouard Bozon @edbzn

## 19.0.1 (2024-10-07)


### 🩹 Fixes

- bump deps ([5d7fe4f1](https://github.com/nxext/nx-extensions/commit/5d7fe4f1))


### ❤️  Thank You

- Edouard Bozon @edbzn