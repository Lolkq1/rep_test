const express = require('express')
const app = express()
const path = require('path')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(8080, () => {
    console.log('sv rodando em 8080')
})