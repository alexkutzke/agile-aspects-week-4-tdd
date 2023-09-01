const express = require('express')
const app = express()

const port = 4444

app.get('/', (req, res) => {
  res.send('All is working Well!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)

})
