/**
 * Part of vite-plugin-node-env project.
 *
 * @copyright  Copyright (C) 2023 __ORGANIZATION__.
 * @license    __LICENSE__
 */

const chalk = require('chalk');

module.exports = function showEnv(exposes = {}) {
  return {
    name: 'show-env',
    nodeEnv: null,

    configResolved(config) {
      if (exposes && Array.isArray(exposes) && exposes.length > 0) {
        console.log();
        console.log(chalk.yellow('MODE:'), chalk.green(config.mode));

        console.log(chalk.yellow('ENVIRONMENT VARIABLES'));

        for (const env of exposes) {
          console.log(
            `  ${env}:`,
            chalk.green(config.env[env])
          );
        }

        console.log();
      }
    }
  }
}
