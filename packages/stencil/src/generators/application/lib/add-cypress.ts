import {
  addProjectConfiguration,
  ensurePackage,
  joinPathFragments,
  NX_VERSION,
  Tree,
} from '@nx/devkit';
import { ApplicationSchema } from '../schema';

export async function addCypress(tree: Tree, options: ApplicationSchema) {
  if (options.e2eTestRunner !== 'cypress') {
    return () => {}; // eslint-disable-line @typescript-eslint/no-empty-function
  }

  const { webStaticServeGenerator } = ensurePackage<typeof import('@nx/web')>(
    '@nx/web',
    NX_VERSION
  );

  await webStaticServeGenerator(tree, {
    buildTarget: `${options.projectName}:build`,
    targetName: 'serve-static',
    spa: true,
  });

  const { configurationGenerator } = ensurePackage<
    typeof import('@nx/cypress')
  >('@nx/cypress', NX_VERSION);

  addProjectConfiguration(tree, options.e2eProjectName, {
    projectType: 'application',
    root: options.e2eProjectRoot,
    sourceRoot: joinPathFragments(options.e2eProjectRoot, 'src'),
    targets: {},
    implicitDependencies: [options.projectName],
    tags: [],
  });

  return await configurationGenerator(tree, {
    ...options,
    project: options.e2eProjectName,
    directory: 'src',
    // the name and root are already normalized, instruct the generator to use them as is
    bundler: 'webpack',
    skipFormat: true,
    devServerTarget: `${options.projectName}:${options.e2eWebServerTarget}`,
    baseUrl: options.e2eWebServerAddress,
    jsx: true,
    rootProject: false,
    webServerCommands: {
      default: `nx run ${options.projectName}:${options.e2eWebServerTarget}`,
      production: `nx run ${options.projectName}:preview`,
    },
    ciWebServerCommand: `nx run ${options.projectName}:serve-static`,
  });
}
