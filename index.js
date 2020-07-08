const express = require('express')

const app = express()

app.get('/test', (req, res) => {
    return res.json({hello: "World, How you doing?"})
})

app.listen(3333)
