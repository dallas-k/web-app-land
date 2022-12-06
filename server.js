"use strict";

import * as http from 'http';

const server = http.createServer( (request, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html'});
})

server.listen(8080, () => {console.log('server is running')});