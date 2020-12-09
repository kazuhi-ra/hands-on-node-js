'use strict'
const fibonacci = require('../fibonacci')
const { parentPort } = require('worker_threads')

// parentPort.postMessage(fibonacci(workerData))
parentPort.on('message', n => parentPort.postMessage(fibonacci(n)))
