# playground-rpc
Experimenting with `rpc` in Node.

- [x] try out grpc
- [ ] create HTTP2 server-client
- [x] define protobuf schema
- [ ] create protobuf / HTTP2 server-client
- [ ] create protobuf / HTTP2 server-worker (RPC)
- [ ] run some quick load tests

## Usage
```sh
# generate certs used for TLS in HTTP2,
# they're self-signed but that's OK because
# it's not like we can validate them anyway
$ ./mkcerts.js

# cool, now let's start a server
$ node server

# and now run the client in another tab
$ node client.js
```

## FAQ
### hey, your examples are not using grpc!
Yup, had a hard time getting it to run. I find it to be a bit opaque, so yeah
I'd rather dip a bit lower than that from the get-go.

### What about curl?
http2 with curl is hard - couldn't get it to work within reasonable time. Needs
revisiting - though it's definitely possible

### What's your take on the Node http2 package?
It needs better documentation, and is unfortunately not 1:1 compatible with the
Node core API. Stuff like quitting a client after a request has been resolved
turns out to be... tricky.

## See Also
- https://io2015codelabs.appspot.com/codelabs/gRPC#1
- https://developers.google.com/protocol-buffers/docs/reference/proto3-spec#service_definition
- https://developers.google.com/protocol-buffers/docs/reference/overview#c-reference_1
- https://github.com/mafintosh/protocol-buffers

## License
[MIT](https://tldrlegal.com/license/mit-license)
