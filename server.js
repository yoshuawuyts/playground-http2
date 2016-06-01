const http = require('http2')
const pbs = require('pbs')
const fs = require('fs')

const PORT = 1337

const certificate = fs.readFileSync('./certs/certificate.pem')
const serviceKey = fs.readFileSync('./certs/service.key')
const messages = pbs(fs.readFileSync('./test.proto'))

const opts = { key: serviceKey, cert: certificate }
http.createServer(opts, function (req, res) {
  const decoder = messages.Test.decode(req)
  decoder(function (msg, cb) {
    console.log('msg', msg)
  })
  req.pipe(decoder)
  res.end('ACK')
}).listen(PORT)

