const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');

// local import
const connectDb = require('./db')
const bookRoutes = require('./controllers/book.controller')


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// routing
app.use('/books', bookRoutes)


// configure view engine
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    extname: 'hbs', // handlebars
    layoutsDir: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'mainLayout.hbs'
})) 
app.set('view engine', '.hbs')

connectDb()
.then(data =>{
    console.log('db connection succeeded ');
    
    app.listen(3000, ()=>{
        console.log('Server started at 3000');
    }).on('error', err=> console.log('Server ignition failed:\n', err));    
})
.catch(err => console.log('error in connecting to db:\n', err));