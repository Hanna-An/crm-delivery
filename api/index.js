const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())

app.get('/users', (req, res) => {
  const name = req.query.name ? req.query.name.toLowerCase() : undefined
  console.log(name);
  fs.readFile('static/users.json', 'utf8',
     (error, data) => {
      if (error) throw error
      data = JSON.parse(data)
      if (data.length){
        if (name) {
          res.send(data.filter((el) => {
              return (el.first_name.toLowerCase().includes(name) || 
              el.last_name.toLowerCase().includes(name))
          }))
        } else {
          res.send(data)
        }
      }
      else {
        res.send([])
      }
    });
});

module.exports = {
  path: '/api',
  handler: app
}

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
