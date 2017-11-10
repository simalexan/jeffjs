'use strict'
const path = require('path'),
  fs = require('fs'),
  fsUtil = require('../util/fs-util'),
  commandUtil = require('../util/command-util')

module.exports = function generate(options, optionalLogger) {
  console.log('generating?')
  console.log(options)
  let apiArguments = options['api'] || options['claudia-api']
  apiArguments = apiArguments.split('')

  const source = (options && options.source) || process.cwd(),
    projectPath = options['folder'] ? path.join(source, options['folder']) : source, //if not locally, then create a folder and generate

    validationError = function () {

      if (options['folder'] && fsUtil.isDir(path.join(source, options['folder']))) {
        return 'An folder with the same name exists in this folder';
      }

      if (!apiArguments) {
        return 'Application template is missing. please specify with "--claudia-api crud" or some of the "c","r","u","d" letters for action types';
      }

      if (apiArguments.length > 4) {
        return 'Invalid Actions for your application template. Please specify with "--claudia-api crud" or some of the "c","r","u","d" letters for action types';
      }

      if (!options['endpoints']) {
        return 'Endpoint names for your application template are missing. please specify with "--endpoints users" or a list of endpoint names like "--endpoints products,users"';
      }
    },
    generateProject = function (projectPath) {
      let prepareFolder = options['folder'] ? fsUtil.makeDir(projectPath) : Promise.resolve()
      let endpoints = options['endpoints'].split(',')


      return prepareFolder
        .then(() => fsUtil.createFile(path.join(projectPath, 'index.js')))
        .then(() => fs.truncate(path.join(projectPath, 'index.js'), 0))
        .then(() => {
          return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '../app-templates/claudia-api.js') , (err, data) => {
              if (err) reject(err)
              return resolve(data)
            })
          })
        })
        .then((data) => {
          return new Promise((resolve, reject) => {
            fs.appendFile(path.join(projectPath, 'index.js'), data, (err) => {
              if (err) reject(err)
              return resolve()
            });
          })
        })
        .then(() => {
          return apiArguments.indexOf('c') == -1 ? Promise.resolve() :
            commandUtil.genRoute('../app-templates/dynamo/api-create.js', endpoints[0], projectPath)
        })
        .then(() => {
          return apiArguments.indexOf('r') == -1 ? Promise.resolve() :
            commandUtil.genRoute('../app-templates/dynamo/api-read.js', endpoints[0], projectPath)
        })
        .then(() => {
          return apiArguments.indexOf('u') == -1 ? Promise.resolve() :
            commandUtil.genRoute('../app-templates/dynamo/api-update.js', endpoints[0], projectPath)
        })
        .then(() => {
          return apiArguments.indexOf('d') == -1 ? Promise.resolve() :
            commandUtil.genRoute('../app-templates/dynamo/api-delete.js', endpoints[0], projectPath)
        })
        .then(() => {
          let policiesDir = path.join(projectPath, '/policies')
          fsUtil.makeDir(policiesDir)
          return fsUtil.copy(path.join(__dirname, '../app-templates/dynamo/policies.json'), policiesDir)
        })
        .then(() => {
          let projectDirectoryName = path.basename(path.dirname(path.join(projectPath, 'index.js')))
          return commandUtil.genPackage(projectDirectoryName, projectPath)
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