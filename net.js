const pbuf = require('protocol-buffers')
const net = require('net')
const fs = require('fs')

const messages = pbuf(fs.readFileSync('./test.proto'))
const port = 1337

net.createServer(function (socket) {
  const message = messages.Test.encode({
    num: 42,
    payload: 'Hello World'
  })
  socket.end(message)
}).listen(port, function () {
  console.log(`server listening on ${port}`)
})
