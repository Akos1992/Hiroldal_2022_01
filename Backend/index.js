const express = require('express');
const path = require('path');

var app = express();

const staticRoot = '../Frontend/dist/hiroldal';
const staticPath = '/static';

const fullStaticRoot = path.join(__dirname, staticRoot);
// app.use(staticPath, express.static(fullStaticRoot));
app.use(express.json())


app.get('/', function (req, res) {
    res.send('Hello World');
})

// Routers
app.use('/news', require('./app/controllers/newsItem'));
app.use('/users', require('./app/controllers/user'));

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Indítás...");
    if (process.env.NODE_ENV !== 'production') {
        console.log('Híroldal szerver fut: http://%s:%s', host, port)
        // console.log(`Weboldal:\thttp://${host}:${port}${staticPath}`);
        // console.log(`\t\thttp://localhost:${port}${staticPath}`);
    }
    console.log("A szerver elindult");

})