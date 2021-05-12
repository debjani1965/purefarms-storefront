const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/purefarms'));
app.get('/', function (request, response) {
    response.sendFile( 'index.html', {root: 'dist/purfarms/index.html'});
});
app.listen(process.env.PORT || 8080);