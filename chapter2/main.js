const fs = require('fs')

// p47
fs.readdir('unchi', (err, files) => {
  console.log('fs.readdir 実行結果')
  console.log('err', err)
  console.log('files', files)
})

// p49
function parseJSONAsync(json, callback) {
  try {
    setTimeout(() => {
      callback(JSON.parse(json))
    }, 1000)
  } catch (err) {
    console.error('エラーをキャッチ', err)
    callback({})
  }
}

parseJSONAsync('不正なJSON', result => {
  console.log('parse結果', result)
})

