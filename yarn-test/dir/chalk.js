const chalk = require('chalk')
const log = console.log

log(chalk.blue('Hello World !')+chalk.green('!!!!'))      
log(chalk.blue.bgRed.bold('Hello World !'))
log(chalk.blue('Hello', 'world', 'foo'))
log(chalk.red('Hello', chalk.underline.bgGreen('world') + '!'))

log(chalk.green(
  'I am a green line ' + 
  chalk.blue.underline.bold('with a blue substring ') + 
  'that becomes green again !'
))

log(`
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
`)

log(chalk`
  CPU: {red 50%}
  RAM: {green 50%}
  DISK: {rgb(255,133,0) 20%}
`)

log(chalk.keyword('orange')('Yay for orange colored text!'))
log(chalk.rgb(123,45,67).underline('Underlined reddish color'))
log(chalk.hex('#deaded').bold('Bold gray'))
log(chalk.bgCyan.blueBright('yes'))