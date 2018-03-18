# ytdl-run
> youtube-dl runner in node.js
[![npm](https://img.shields.io/npm/v/ytdl-run.svg?style=flat-square)](https://www.npmjs.com/package/ytdl-run)
[![npm](https://img.shields.io/npm/dt/ytdl-run.svg?style=flat-square)](https://www.npmjs.com/package/ytdl-run)

## Install
``` sh
yarn add ytdl-run
```

## Usage

### Basic
```js
const ytdl = require('ytdl-run')

// supports async/await
(async _=>{
  // download file into current working directory
  await ytdl('https://www.youtube.com/watch?v=JQGRg8XBnB4')

  console.log('downloaded!')
})()
```

### Mp3
```js
// download mp3 track into "music/" directory
ytdl.mp3('https://www.youtube.com/watch?v=JQGRg8XBnB4', {cwd: 'music/'})
```

### Stream 
```js
const fs = require('fs')

ytdl.stream('https://www.youtube.com/watch?v=JQGRg8XBnB4')
  .stdout
  .pipe(fs.createWriteStream('video.mp4'))
```

### Options
```js
// same as ytdl.mp3('https://www.youtube.com/watch?v=JQGRg8XBnB4')
const opts = [
  '-x',
  '-o', '%(title)s.%(ext)s',
  '--audio-format', 'mp3',
  '--audio-quality', '0',
  'https://www.youtube.com/watch?v=JQGRg8XBnB4'
]
ytdl(opts)
```

## Related
- [youtube-dl](https://rg3.github.io/youtube-dl/)
- [execa](https://github.com/sindresorhus/execa)

## License
MIT