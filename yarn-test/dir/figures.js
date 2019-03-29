const figures = require('figures')
const chalk = require('chalk')
const logger = require('../lib/logger')

logger.log(chalk.green.italic(figures.tick + 'compiled success'))
logger.log(chalk.red(figures.cross + 'failed'))
logger.log(`[${figures.oneHalf}] ...`)
logger.log(`${figures.arrowUp}`)