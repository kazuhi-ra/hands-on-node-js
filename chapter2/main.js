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

