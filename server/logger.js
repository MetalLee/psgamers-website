const chalk = require('chalk');
// const ip = require('ip');

const divider = chalk.gray('\n-----------------------------------');

const logger = {
  error: (err) => {
    console.error(chalk.red(err));
  },

  appStarted: (port, host) => {
    console.log(`Server started ! ${chalk.green('✓')}`);
    console.log(`${chalk.bold('Access URLs:')}${divider}
      Localhost: ${chalk.magenta(`http://localhost:${port}`)}
      ${divider}
    `);
  },
};

module.exports = logger;
