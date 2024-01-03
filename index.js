const compression = require('compression')
const express = require('express')
const Gun = require('gun')

const app = express()
const port = 8765
app.use(compression())
app.use(Gun.serve)
app.use(express.static(__dirname));

const server = app.listen(port, () => {
    console.log("Listening at: http://localhost:" + port)
})

app.get('/', (req, res) => {
    res.send('Running on port: ' + port)
})

Gun({ web: server })