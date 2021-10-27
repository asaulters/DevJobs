const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views')

const indexController = require('./routes/index');

app.use('/', indexController)

app.listen(3000, console.log('listening to port 3000'))

// 