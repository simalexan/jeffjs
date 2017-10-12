'use strict'

const path = require('path')
const colors = require('colors')

function showHelp() {
  return console.log(`
	${colors.magenta('Jeff')} ✤ ${colors.cyan('Generate and deploy serverless apps in a jiffy')}
	 ${colors.magenta('Version:')} ${colors.cyan(require(path.join(__dirname, '..', 'package.json')).version)}
	 
	USAGE:
	 ${colors.magenta('jeff {options}')}
	 
	AVAILABLE OPTIONS:
	 ${colors.magenta('--help')}        ${colors.cyan('or')} ${colors.magenta('-help')}   Prints this help
	 ${colors.magenta('--version')}     ${colors.cyan('or')} ${colors.magenta('-v')}    Prints the current version
	 ${colors.magenta('generate')}      ${colors.cyan('or')} ${colors.magenta('generate')}  Generates a serverless project, needs an additional parameter when executing command ${colors.cyan('| default: false')}
	 ${colors.magenta('deploy')}        Deploys a serverless project, needs a config when executing command ${colors.cyan('| default: false')}
			
			
	More info: ${colors.cyan('https://github.com/simalexan/jeffjs')}
	Changelog/release history: ${colors.cyan('https://github.com/simalexan/jeffjs/releases')}
	`)
}

module.exports = showHelp