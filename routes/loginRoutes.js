const express = require('express')
const router = express.Router()

// router.get("/login", (req, res) => {
//     res.send('<h1>Login')
// })

const loginController = require('../controller/LoginController')

router.get("/login",loginController.getLogin);

module.exports = router