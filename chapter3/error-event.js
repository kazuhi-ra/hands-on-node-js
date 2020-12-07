const events = require('events')

try {
  new events.EventEmitter()
    .on('error', err => console.log('errorイベント'))
    .emit('error', new Error('エラー'))
} catch (err) {
  console.log('catchです')
}
