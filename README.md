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

## See Also
- https://io2015codelabs.appspot.com/codelabs/gRPC#1<Paste>

## License
[MIT](https://tldrlegal.com/license/mit-license)
