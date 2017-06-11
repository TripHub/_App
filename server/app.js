const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '..', 'build')))

// we need all routes to give index.html so client-side routing works
// as described in #3.
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

module.exports = app
