// p61 parseJSONAsyncをPromiseで書き直し
function parseJSONAsync(json) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(JSON.parse(json))
      } catch (err) {
        reject(err)
      }
    }, 10)
  })
}

// p66 finnaly追記
parseJSONAsync('{ "name": "kazuhi-ra", "age": 24 }')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finalyです'))

parseJSONAsync('Yo')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log('finalyです'))
  