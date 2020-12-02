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

// parseJSONAsync('不正なJSON', result => {
//   console.log('parse結果', result)
// })

// process.on('uncaughtException', err => process.exit(1))

// p51
function parseJSONAsync2(json, callback) {
  setTimeout(() => {
    try {
      callback(JSON.parse(json))
    } catch (err) {
      callback(err)
    }
  }, 1000)
}

parseJSONAsync2('不正なJSON', (err, result) => {
  console.log('parse結果', err, result)
})
