const crypto = require('crypto')
const express = require('express')
const { validator } = require('express-validator')
const { check, validationResult } = require('express-validator')
const router = express.Router();

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

/**
 * @swagger
 * /:
 *   post:
 *     tags: [Auth]
 *     description: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 description: User email
 *                 type: string
 *               password:
 *                 description: Password
 *                 type: string
 *     responses:
 *       200:
 *         description: Returns a token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: array
 *                   items: 
 *                     type: string
 *                 accessToken:
 *                   type: string
 *       
 */
 router.post('/', validation, handleValidationErrors, (req, res) => {
    const body = req.body
    const login_users = req.app.login_users
    const user = login_users.get("users").find({ username: body.username }).value();
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
        accessToken: user.id
    })
})

module.exports = router;