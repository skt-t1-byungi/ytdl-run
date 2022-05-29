const test = require('ava')
const fs = require('fs-extra')
const path = require('path')
const ytdl = require('.')

const testVideo = 'https://www.youtube.com/watch?v=C0DPdy98e4c'
const tmpDir = path.join(__dirname, 'tmp/')

test.before(async t => {
    await /* TODO: JSFIX could not patch the breaking change:
    Creating a directory with fs-extra no longer returns the path 
    Suggested fix: The returned promise no longer includes the path of the new directory */
    fs.ensureDir(tmpDir)
})

test.after(async t => {
    await fs.remove(tmpDir)
})

test('basic, stream', async t => {
    await ytdl([testVideo, '-f', 'mp4', '-o', 'basic.mp4'], {cwd: tmpDir})
    const {size} = await fs.stat(path.join(tmpDir, 'basic.mp4'))
    t.truthy(size)

    const streamPath = path.join(tmpDir, 'stream.mp4')
    await new Promise(
        (resolve, reject) => ytdl.stream([testVideo, '-f', 'mp4'], {cwd: tmpDir})
            .stdout
            .pipe(fs.createWriteStream(streamPath))
            .on('finish', resolve)
            .on('error', reject)
    )

    const {size: streamSize} = await fs.stat(streamPath)
    t.is(streamSize, size)
})

test('getInfo', async t => {
    const {title} = await ytdl.getInfo(testVideo)
    t.is(title, 'TEST VIDEO')
})
