#!/usr/bin/env node

const fromString = require('from2-string')
const mkdirp = require('mkdirp')
const pem = require('pem')
const fs = require('fs')

const opts = { days: 1, selfSigned: true }
pem.createCertificate(opts, function (err, keys) {
  if (err) throw err
  mkdirp('./certs', function (err, res) {
    if (err) throw err

    fromString(keys.serviceKey)
      .pipe(fs.createWriteStream('./certs/service.key'))
    fromString(keys.certificate)
      .pipe(fs.createWriteStream('./certs/certificate.pem'))
  })
})
