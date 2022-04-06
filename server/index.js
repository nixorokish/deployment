const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public')) //static is css, js files, in front end etc.

// endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const PORT = process.env.PORT || 4005

app.listen(PORT,() => { console.log(`Listening on ${PORT}`)})