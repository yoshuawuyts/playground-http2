#!/usr/bin/env node

const xtend = require('xtend/mutable')
const http2 = require('http2')
const url = require('url')
const fs = require('fs')

const serviceKey = fs.readFileSync('./certs/service.key')
const certificate = fs.readFileSync('./certs/certificate.pem')

const opts = url.parse('https://localhost:1337/')
xtend(opts, { key: serviceKey, ca: certificate })
const request = http2.get(opts)

request.on('response', function (res) {
  res.pipe(process.stdout)
  this.close()
})
