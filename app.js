const express = require('express')
const app = express()
const port = 8080;

app.use(express.static('public'));

app.get('/generic', function (req, res) {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

