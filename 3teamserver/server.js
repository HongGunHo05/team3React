const express = require('express')
const app = express();
const path = require('path')

app.listen(8080);

app.use('/', express.static(path.join(__dirname, 'douzone3teamticket/build')))

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'douzone3teamticket/build/index.html'));
})