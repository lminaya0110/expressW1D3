const express = require('express')
const app = express()

const fs = require('fs')

app.engine('hypatia', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)

        const rendered = context.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#', '<div>' + options.content + '</div>')
    })
})

app.set('views', './views')

app.set('views engine', 'hypatia')

app.get('/', (req, res) => {
    res.send('ʕ•́ᴥ•̀ʔっ')
})

app.get('/greeting/:name', (req, res) => {
    res.send('(̶◉͛‿◉̶) Hi there ' + req.params.name + ' !')
})

app.get('/tip/',(req, res) =>{
    res.render('tip', {title: 'TIP', message: 'subtotal <input><br> total <br> Tip(20%) = ', content: 'TOTAL = '})
})

app.get('/tip/:total',(req, res) =>{
    res.send('The total is $' + req.params.total)
})

app.get('tip/:total/:percentage', (req,res) => {
    let tip = req.params.total = (req.params.percentage/100)
    res.render('template', {title: 'TIP', message: 'your subtotal is $' + req.params.total + 'tip will be $' + tip})
})

app.listen(3000)
