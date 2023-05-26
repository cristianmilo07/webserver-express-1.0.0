const express = require('express')
const app = express()
const port = 8080;

app.get('/', function (req, res) {
  res.send('Home page')
})

app.get('/hola-mundo', function (req, res) {
    res.send('hola mundo en su respectiva ruta')
  })

app.get('*', function (req, res) {
    res.send('404 | page not found')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.listen(3000)