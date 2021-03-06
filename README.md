# ytdl-run
youtube-dl runner in node.js

[![npm](https://img.shields.io/npm/v/ytdl-run.svg)](https://www.npmjs.com/package/ytdl-run)
[![npm](https://img.shields.io/npm/dt/ytdl-run.svg)](https://www.npmjs.com/package/ytdl-run)
[![CircleCI](https://circleci.com/gh/skt-t1-byungi/ytdl-run/tree/master.svg?style=shield)](https://circleci.com/gh/skt-t1-byungi/ytdl-run/tree/master)

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

### Info
```js
const info = await ytdl.getInfo('https://www.youtube.com/watch?v=JQGRg8XBnB4')

console.log(info.title) // [MV] MOMOLAND (모모랜드) _ BBoom BBoom (뿜뿜)
console.log(info.duration) // 210
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
const opts = [
  '-o', '%(title)s.%(ext)s',
  '--audio-quality', '0',
  'https://www.youtube.com/watch?v=JQGRg8XBnB4'
]
ytdl(opts)
```

### Update to latest version
```js
await ytdl.update() // => 2019.05.11 (Returns current version)
```

## Related
- [youtube-dl](https://rg3.github.io/youtube-dl/)
- [execa](https://github.com/sindresorhus/execa)

## License
MIT
