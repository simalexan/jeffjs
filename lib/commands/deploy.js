'use strict'

const path = require('path'),
  fsUtil = require('../util/fs-util')

module.exports = function deploy(options, optionalLogger) {
  console.log('deploying?')

  const source = process.cwd(),
    deployment = fsUtil.fileExists(path.join(source, 'claudia.json')) ?
      fsUtil.runClaudiaUpdate : fsUtil.runClaudiaCreate

  return deployment()
}