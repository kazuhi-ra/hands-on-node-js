const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' })
  res.write('hey, yo')
  res.end()
})

server.listen(8000)
