/**
 * The frontend server is really really (really) simple.
 * All it does is map every pathname to /index.html so that client-side routing
 * can take over. Without this, certain callback routes would give a 404
 * in production, as described in the CRA docs: http://bit.ly/2rbPw2W.
 */

const app = require('./app')

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`App listening on :${PORT}.`)
})
