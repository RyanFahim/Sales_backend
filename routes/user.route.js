const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.get('/showAllUsers', UserController.index)
router.post('/updateUser', UserController.updateUser)
router.post('/deleteUser', UserController.deleteUser)

module.exports = router