// to simplify the process of creating routes, wee create a routes folder
// then we group all the routes that are together
// in our case we have two route files
// auth.js and people .js
// place all the code related to each inside the specific files

// instead of app, we use router in those files

// now we have a lot of routes to take care of
const express = require('express')
const app = express()

// importing the 'people' routes
const people = require('./routes/people')

// importing the login route
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/login',auth)

app.use('/api/people',people)




app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})