'use strict'
const path = require('path'),
  fsUtil = require('../util/fs-util')

module.exports = function generate(options, optionalLogger) {
  console.log('generating?')
  console.log(options)
  const source = (options && options.source) || process.cwd(),

    validationError = function () {

      if (!options['claudia-api']) {
        return 'Application template is missing. please specify with --claudia-api crud or some of the C,R,U,D letters for ops';
      }
      if (fsUtil.isDir(path.join(source, options['claudia-api']))) {
        return 'An application with the same name exists in this folder';
      }
    },
    generateProject = function () {

      return fsUtil.makeDir(path.join(source, options['claudia-api'])).then(() => {
        console.log(fsUtil.isDir(path.join(source, options['claudia-api'])));
        return Promise.resolve('success')
      })
    };

  if (validationError()){
    return Promise.reject(validationError());
  }

  return generateProject()
}