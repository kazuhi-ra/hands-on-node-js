const fs = require('fs')

const copyFileWithStream = (src, dest, cb) => {
  fs.createReadStream(src)
    .pipe(fs.createWriteStream(dest))
    .on('finish', cb)
}

copyFileWithStream('./fizzbuzz.js', '../copy.js', () => console.log('コピー完了'))
