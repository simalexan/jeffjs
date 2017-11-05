'use strict'
const path = require('path'),
  fs = require('fs'),
  fsUtil = require('../util/fs-util')

exports.genPackage = function(projectName, projectPath){
  return fsUtil.createFile(path.join(projectPath, 'package.json'))
    .then(() => fs.truncate(path.join(projectPath, 'package.json'), 0))
    .then(() => {
      return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../app-templates/package.json') , (err, data) => {
          if (err) reject(err)
          return resolve(data)
        })
      })
    })
    .then((data) => {
      return new Promise((resolve, reject) => {
        fs.appendFile(path.join(projectPath, 'package.json'), data, (err) => {
          if (err) reject(err)
          return resolve()
        })
      })
    })
    .then(() => fsUtil.replaceStringInFile(/#{projectName}/g, projectName, path.join(projectPath, 'package.json')))
}
