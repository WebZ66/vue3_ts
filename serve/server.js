const express = require('express')
const serve = express()
const data = require('./data.json')
serve.get('/api/get', (req, res) => {
  setTimeout(() => {
    let origin = req.headers.origin
    res.setHeader('Access-Control-Allow-Origin', origin)  
    res.send({ data: 123 })
  }, 2000)
})
serve.listen(3000, () => {})
