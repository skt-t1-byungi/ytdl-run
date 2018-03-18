const execa = require('execa')
const binPath = require('./bin-path')

module.exports = (args, opts) => execa(binPath, [].concat(args), opts)
