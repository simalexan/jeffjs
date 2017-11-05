'use strict'

module.exports = function generate(options, optionalLogger) {
  console.log('generating?')
  console.log(options)

  const validationError = function () {
    if (!options['claudia-api']) {
      return 'Application template is missing. please specify with --claudia-api crud or some of the C,R,U,D letters for ops';
    }
  },
    generateProject = function () {
      return Promise.resolve('success')
    };

  if (validationError()){

  }

  return generateProject()
}