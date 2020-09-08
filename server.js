const express = require('express')
const path = require('path')

var app = express()

var bodyParser = require('body-parser')


// parse various different custom JSON types as JSON
app.use(bodyParser.urlencoded({ extended: false }))

// parse some custom thing into a Buffer
app.use(bodyParser.json())


app.use(express.static('/public', express.static(path.join(__dirname, '/public'))))

app.use('/api/task', taskRouter)

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.listen(process.env.PORT, function() {

});