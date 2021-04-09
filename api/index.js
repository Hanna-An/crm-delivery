const fs = require('fs')
const { v4: uuidv4 } = require('uuid')
const crypto = require('crypto')
const express = require('express')
const { validator } = require('express-validator')
const { check, validationResult } = require('express-validator')

const app = express()

app.use(express.json())

const hashPass = (password) =>  {
  const hash = crypto.createHash('sha256')
  .update(password)
  .digest('base64')
  return hash
}

const validation = [
  check('username')
    .exists()
    .withMessage('username is required')
    .isEmail()
    .withMessage('username not valid'),
  check('password')
      .exists()
      .withMessage('password is required')
]

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      errors: errors.array()
    })
  }
  next()
}

app.post('/api/login', validation, handleValidationErrors, (req, res) => {
  const body = req.body
  fs.readFile(`${__dirname}/login_users.json`, 'utf8', (error, data) => {
    if (error) throw error
    if (!data.length){
      res.status(500).send({
        success: false,
        errors: ['File not found!']
        })
      return
    }   
    data = JSON.parse(data)
    const user = data.find((el) => {
      if (el.username === body.username) {
        return el
      }
    })
    if (!user){
      res.status(400).send({
        success: false,
        errors: ['User not found!']
        })
      return
    }   
    if (user.password !== hashPass(body.password)) {
      res.status(400).send({
        success: false,
        errors: ['Wrong password!']
        })
      return
    }
    res.send({
      success: true,
      error: null,
      accessToken: uuidv4()
      })
  })
})

app.get('/api/users', (req, res) => {
  const name = req.query.name ? req.query.name.toLowerCase() : undefined
  fs.readFile(`${__dirname}/users.json`, 'utf8',
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

module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
