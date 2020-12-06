const events = require('events')

const eventEmitter = new events.EventEmitter()

eventEmitter.on('heyHey', () => {
  console.log('I\'m heyHey')
})

eventEmitter.emit('heyHey')

console.log(eventEmitter.emit('heyHey'))
console.log(eventEmitter.emit('yoYo'))
