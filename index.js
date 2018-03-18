const execa = require('execa')
const binPath = require('./bin-path')

const ytdl = module.exports = (args, opts) => execa(binPath, [].concat(args), opts)

ytdl.getInfo = (args, opts) => ytdl([].concat(args, '-j'), opts).then(res => JSON.parse(res.stdout))

ytdl.mp3 = (args, opts) => ytdl([
  '-x',
  '-o', '%(title)s.%(ext)s',
  '--audio-format', 'mp3',
  '--audio-quality', '0',
  '--embed-thumbnail',
  '--add-metadata' ].concat(args), opts)

ytdl.stream = (args, opts) => ytdl(['-o', '-'].concat(args), opts)
