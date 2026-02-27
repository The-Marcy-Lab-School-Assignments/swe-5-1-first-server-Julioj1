const http = require('node:http');

const server = http.createServer((req, res) => {
    const { method } = req;
    const { pathname, searchParams } = new URL(req.url, 'http://localhost:8080');
    const date = new Date().toISOString();

    console.log(method, pathname, date);

    if (method === 'GET' && pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to my first server');
        return;
    } 
    if (method === 'GET' && pathname === '/api/joke') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const responseBody = JSON.stringify({ setup: 'Hola', punchline: 'Adios' });
        res.end(responseBody);
        return;
    }
    if (method === 'GET' && pathname === '/api/rollDie') {
        let quantity = parseInt(searchParams.get('quantity'));
        if(!quantity || quantity < 1) quantity = 1;
        const rolls = [];
        for (let i = 0; i < quantity; i++){
            rolls.push(Math.floor(Math.random() * 6) + 1);
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ rolls }));
        return;
    }
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});