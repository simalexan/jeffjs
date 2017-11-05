'use strict'

module.exports = function generate(options, optionalLogger) {
  console.log('generating?')
  console.log(options)
  return Promise.resolve('success')
}