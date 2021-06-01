import http  from 'http'

const server = http.createServer((request,Response) =>{
    Response.writeHead(200, {'Contest-Type': 'text/plain'});
    Response.write('ariel');
    Response.end();
    });

    server.listen(8080);

    console.log('Listenig on http://Localhost/8080');

    