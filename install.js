const commandExists = require('command-exists')
const download = require('download')
const path = require('path')
const execa = require('execa')
const fs = require('fs-extra')
const normalize = require('normalize-path')

const isWin = require('is-windows')();

(async _ => {
  console.log('installing youtube-dl...')

  const binPath = await install()
  const {stdout: version} = await execa(binPath, ['--version'])

  // create path file
  try {
    await fs.writeFile(path.join(__dirname, 'bin-path.js'), `module.exports = "${normalize(binPath)}"`)
    console.log(`Installed successfully. (ver ${version})`)
  } catch (err) {
    console.error(err)
  }
})()

async function install () {
  try {
    if (await commandExists('youtube-dl')) return 'youtube-dl'

    const filename = isWin ? 'youtube-dl.exe' : 'youtube-dl'
    const dirPath = path.join(__dirname, 'bin')

    await download('https://yt-dl.org/downloads/latest/' + filename, dirPath)
    await fs.chmod(path.join(dirPath, filename), 0o755)
  } catch (err) {
    console.error(err)
  }

  return path.join(dirPath, filename)
}
