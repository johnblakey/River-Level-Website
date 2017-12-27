const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

let port = "4000";
const server = app.listen(port, "0.0.0.0", () => {
    var {address, port} = server.address();
    console.log(`Express react app running at http://${address}:${port}`);
});