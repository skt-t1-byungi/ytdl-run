const execa = require('execa')
const binPath = require('./bin-path')

const ytdl = module.exports = (args, opts) => execa(binPath, [].concat(args), opts)

ytdl.mp3 = (args, opts) => ytdl([].concat(args,
  [ '-x',
    '-o', '%(title)s.%(ext)s',
    '--audio-format', 'mp3',
    '--audio-quality', '0' ]), opts)

ytdl.stream = (args, opts) => ytdl([].concat(args, '-o', '-'), opts)
