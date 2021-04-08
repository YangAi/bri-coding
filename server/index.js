const express = require('express')

// Create express instance
const app = express()

// Require API routes
const bri = require('./routes/bri')
const briActionType = require('./routes/briActionType')

// Import API Routes
app.use(bri)
app.use(briActionType)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
