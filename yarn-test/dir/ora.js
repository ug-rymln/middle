const ora = require('ora')
// const spinner = ora('Loading uniconrns').start()

// setTimeout(() => {
//   spinner.color = 'yellow'
//   spinner.text = 'Loading rainbows'
// }, 1000)

const spinner = ora({
  text: 'Building the production !',
  // spinner: {
  //   interval: 1000,
  //   frames: ['-', '+', '-']
  // },
  color: 'green',
})
spinner.start()
setTimeout(() => {
  spinner.stop()
  spinner.succeed('Building success')
}, 2000)