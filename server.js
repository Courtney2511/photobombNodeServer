const express = require('express')
const pgp = require('pg-promise')()

const db = pgp('postgres://photobomb@localhost/photobomb')
const app = express()

app.get('/', (req, res) => {
  db.any('SELECT * from photo').then(data => res.send(data))
})

app.get('/categories', (req, res) => {
  db.any('SELECT * from category').then(data => res.send(data))
})

app.get('/users', (req, res) => {
  db.any('SELECT * from user').then(data => res.send(data))
})

app.listen(3000, () => console.log('Photobomb server listening on Port 3000'))
