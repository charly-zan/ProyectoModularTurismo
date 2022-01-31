const express = require('express');
const { process_params } = require('express/lib/router');
const app = express();
const path = require('path');

//routes
app.set('views',path.join(__dirname , 'views'));

//setings
app.set('port',3000);
app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);

//middlewares

//routes

app.use(require('./routes/index'));

//static file
app.use(express.static(path.join(__dirname,'public')));

//listeing server
app.listen(app.get('port'), ()  =>{
    console.log('Server on log', app.get('port'));
})