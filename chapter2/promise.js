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

// p78 Promise.race()を使ったタイムアウトの実装
function withTimeout(promise, timeoust) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('タイムアウトです')), timeoust)
    ),
  ])
}

const promise = new Promise(resolve => setTimeout(() => resolve(1), 20))
console.log(withTimeout(promise, 30))
console.log(withTimeout(promise, 10))