import { join, Path, strings } from '@angular-devkit/core';
import {
  apply,
  mergeWith,
  move,
  Rule,
  Source,
  template,
  url,
} from '@angular-devkit/schematics';
import { basename, parse } from 'path';
import { ApplicationOptionsDefaults } from '../defaults';

export interface ApplicationOptions {
  /**
   * PaperDiscord application name
   */
  name: string;
  /**
   * PaperDiscord application author
   */
  author?: string;
  /**
   * PaperDiscord application description
   */
  description?: string;
  /**
   * PaperDiscord application destination directory
   */
  directory?: string;
  /**
   * PaperDiscord application version
   */
  version?: string;

  /**
   * The Bot's Token
   */
  token?: string;
}

export const main = (options: ApplicationOptions): Rule => {
  options.name = strings.dasherize(options.name);

  const path =
    !options.directory || options.directory === 'undefined'
      ? options.name
      : options.directory;

  options = transform(options);

  return mergeWith(generate(options, path));
};

const resolvePackageName = (path: string) => {
  const { name } = parse(path);
  if (name === '.') {
    return basename(process.cwd());
  }
  return name;
};

const generate = (options: ApplicationOptions, path: string): Source => {
  return apply(url(join('./files' as Path)), [
    template({
      ...strings,
      ...options,
    }),
    move(path),
  ]);
};

const transform = (options: ApplicationOptions): ApplicationOptions => {
  return {
    ...ApplicationOptionsDefaults,
    ...options,
    name: resolvePackageName(options.name),
  };
};
