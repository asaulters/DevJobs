const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views')

const indexRoute = require('./routes/index');

app.use('/', indexRoute);
app.use(express.static(__dirname + '/public'));

app.listen(3000, console.log('listening to port 3000'))

// 
// 