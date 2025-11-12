const express = require('express')
const app = express()
const path = require('path')
const mysql2 = require('mysql2')
require('dotenv').config()
console.log(process.env.PASS)
const con = mysql2.createConnection({
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'testee'
})
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})


app.post('/search', (req, res) => {
    let v=''
    req.on('data' , (chunk) => {
        v+=chunk
    })
    req.on('end', () => {
        let v2 = JSON.parse(v)
        console.log(v2)
        con.query('SELECT * FROM livros WHERE nome=?', [v2.nome], (err, data) => {
            if (err) {
                console.log('error')
                res.status(500).send('internal server error')
            } else {
                console.log(data)
                console.log(JSON.stringify({
                    livros:data
                }))
                res.send(JSON.stringify({
                    livros:data
                }))
            }
        })
    })
})

app.listen(8080, () => {
    console.log('sv rodando em 8080')
})

