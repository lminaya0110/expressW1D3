const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('ʕ•́ᴥ•̀ʔっ')
})

app.get('/greeting/:name', (req, res) => {
    res.send('(̶◉͛‿◉̶) Hi there ' + req.params.name + ' !')
})

app.listen(3000)
