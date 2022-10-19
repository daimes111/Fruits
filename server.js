require('dotenv').config()

//require modules
const express = require('express')
const methodOverride = require('method-override')
const db = require('./models/db')
//this will create the express app 
const app = express()

/*Start Config */
//need this line of code to allow us to process and read from data
app.use(express.urlencoded({ extended: true })) //allows us to have req.body
app.use((req, res, next) => {
    res.locals.data= {}
    next()
})
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx') //register the jsx view engine
//click function allows connectin to go through
db.once('open', () => {
    console.log('Connected to db Atlas')
})
/*END Config */

//Mount our middlewear (app.use)
/*Start Middlewear */
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/fruits', require('./controllers/routeController'))
/*END Middlewear */

//tells the app to listen to Port 3000 on localhost
app.listen(3000, () => {
    console.log('Listening on Port 3000')
})
