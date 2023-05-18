/**
 * Part of vite-plugin-node-env project.
 *
 * @copyright  Copyright (C) 2023 __ORGANIZATION__.
 * @license    __LICENSE__
 */

import { Plugin } from 'vite';

declare function showEnv(options: any): Plugin;

export { showEnv as default };
