import * as ts from 'typescript';

import { ProjectType } from '@nx/workspace';
import { SvelteLibrarySchema } from '../library';
import {
  applyChangesToString,
  ChangeType,
  joinPathFragments,
  names,
  readProjectConfiguration,
  StringChange,
  Tree,
} from '@nx/devkit';
import { findNodes } from '@nx/js';

export function addExportsToBarrel(tree: Tree, options: SvelteLibrarySchema) {
  const projectConfig = readProjectConfiguration(tree, options.project);

  const { className, fileName } = names(options.name);
  const indexFilePath = joinPathFragments(projectConfig.sourceRoot, 'index.ts');
  const libraryFile = `./lib/${fileName}/${className}.svelte`;

  if (projectConfig.projectType === ProjectType.Library) {
    const { content, source } = readSourceFile(tree, indexFilePath);

    const changes = applyChangesToString(
      content,
      addExport(source, `export { default as default } from '${libraryFile}';`)
    );
    tree.write(indexFilePath, changes);
  }
}

export function addExport(
  source: ts.SourceFile,
  statement: string
): StringChange[] {
  const allExports = findNodes(source, ts.SyntaxKind.ExportDeclaration);
  if (allExports.length > 0) {
    const lastImport = allExports[allExports.length - 1];
    return [
      {
        type: ChangeType.Insert,
        index: lastImport.end + 1,
        text: `\n${statement}\n`,
      },
    ];
  } else {
    return [
      {
        type: ChangeType.Insert,
        index: 0,
        text: `\n${statement}\n`,
      },
    ];
  }
}

function readSourceFile(
  host: Tree,
  path: string
): { content: string; source: ts.SourceFile } {
  if (!host.exists(path)) {
    throw new Error(`Cannot find ${path}`);
  }

  const content = host.read(path).toString('utf-8');

  const source = ts.createSourceFile(
    path,
    content,
    ts.ScriptTarget.Latest,
    true
  );

  return { content, source };
}
