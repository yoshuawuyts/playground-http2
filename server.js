const http = require('http2')
const fs = require('fs')

const PORT = 1337

const serviceKey = fs.readFileSync('./certs/service.key')
const certificate = fs.readFileSync('./certs/certificate.pem')

const opts = { key: serviceKey, cert: certificate }
http.createServer(opts, function (req, res) {
  res.end('o hai!')
}).listen(PORT)
