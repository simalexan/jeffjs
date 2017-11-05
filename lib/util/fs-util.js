'use strict'

const shell = require('shelljs')

exports.ensureCleanDir = function (dirPath) {
  shell.rm('-rf', dirPath)
  return shell.mkdir('-p', dirPath)
}

exports.makeDir = function (dirPath) {
  'use strict';
  shell.mkdir('-p', dirPath);
  return Promise.resolve();
}

exports.createFile = function (dirPath) {
  'use strict';
  shell.touch(dirPath);
  return Promise.resolve();
}

exports.rmDir = function (dirPath) {
  return shell.rm('-rf', dirPath)
}

exports.fileExists = function (filePath) {
  return shell.test('-e', filePath)
}

exports.isDir = function (filePath) {
  return shell.test('-d', filePath)
}

exports.isFile = function (filePath) {
  return shell.test('-f', filePath)
}

exports.copy = function (from, to) {
  return shell.cp('-r', from, to)
}

exports.recursiveList = function (dirPath) {
  return shell.ls('-R', dirPath)
}
