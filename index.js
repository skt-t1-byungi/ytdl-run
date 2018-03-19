const execa = require('execa')
const binPath = require('./bin-path')

const ytdl = module.exports = (args, opts) => execa(binPath, [].concat(args), opts)

ytdl.getInfo = (args, opts) => ytdl([].concat(args, '-j'), opts).then(res => JSON.parse(res.stdout))

ytdl.stream = (args, opts) => ytdl(['-o', '-'].concat(args), opts)
