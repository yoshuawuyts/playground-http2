#!/usr/bin/env node

const pbuf = require('protocol-buffers')
const xtend = require('xtend/mutable')
const http2 = require('http2')
const url = require('url')
const fs = require('fs')

const certificate = fs.readFileSync('./certs/certificate.pem')
const serviceKey = fs.readFileSync('./certs/service.key')
const messages = pbuf(fs.readFileSync('./test.proto'))

const opts = url.parse('https://localhost:1337/')
xtend(opts, { key: serviceKey, ca: certificate })
const request = http2.request(opts, function (res) {
  res.pipe(process.stdout)
})

const message = messages.Test.encode({
  num: 42,
  payload: 'Hello World'
})

request.write(message)
request.end()
