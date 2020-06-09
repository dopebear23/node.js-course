const http = require('http');

const sevrer= http.createServer((req, res) => {

    if(req.url === '/'){
        res.write('hello world');
        res.end();
    }

    if(req.url === '/api/courses') {

        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }

});
// THis is too basic
// sevrer.on('connection', (socket) => {
//     console.log('New connection');

// });

sevrer.listen(3000);

console.log('Listening on Port 3000...');
