const express = require('express')
const path = require('path')

const app = express()

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '35b13332aa544033bba0ac860d62c6a4',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

app.use(express.static('public')) //static is css, js files, in front end etc.
// works for pushing to heroku

// endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

// setting up an invalid function to log an error to rollbar
app.get('/api/functions', () => {
    try {invalidFunction();
    } catch(e) {
        rollbar.log(e);
    }
})

app.get('/api/whatthefuck', () => {
    try {invalidFunction2();
    } catch(e) {
        rollbar.error(e);
    }
})

const PORT = process.env.PORT || 4005

app.listen(PORT,() => { console.log(`Listening on ${PORT}`)})