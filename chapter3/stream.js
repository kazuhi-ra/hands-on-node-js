const fs = require('fs')
const crypto = require('crypto')

const copyFileWithStream = (src, dest, cb) => {
  fs.createReadStream(src)
    .pipe(crypto.createHash('sha256'))
    .pipe(fs.createWriteStream(dest))
    .on('finish', cb)
}

copyFileWithStream('./fizzbuzz.js', '../copy.js', () => console.log('コピー完了'))
