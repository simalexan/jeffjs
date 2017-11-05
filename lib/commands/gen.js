'use strict'
const path = require('path'),
  fsUtil = require('../util/fs-util')

module.exports = function generate(options, optionalLogger) {
  console.log('generating?')
  console.log(options)
  const source = (options && options.source) || process.cwd(),
    projectPath = options['folder'] ? path.join(source, options['folder']) : source, //if not locally, then create a folder and generate

    validationError = function () {

      if (options['folder'] && fsUtil.isDir(path.join(source, options['folder']))) {
        return 'An folder with the same name exists in this folder';
      }

      if (!options['claudia-api']) {
        return 'Application template is missing. please specify with "--claudia-api crud" or some of the "c","r","u","d" letters for action types';
      }

      if (options['claudia-api'].length > 4) {
        return 'Invalid Actions for your application template. Please specify with "--claudia-api crud" or some of the "c","r","u","d" letters for action types';
      }

      if (!options['endpoints']) {
        return 'Endpoint names for your application template are missing. please specify with "--endpoints users" or a list of endpoint names like "--endpoints products,users"';
      }
    },
    generateProject = function (projectPath) {
      let prepareFolder = options['folder'] ? fsUtil.makeDir(projectPath) : Promise.resolve()

      return prepareFolder
        .then(() => fsUtil.createFile(path.join(projectPath, 'index.js')))
        .then(() => {
          //go over each action and generate template
        })
        .then(() => {
        return 'success'
      })
    };

  if (validationError()){
    return Promise.reject(validationError());
  }

  return generateProject(projectPath)
}