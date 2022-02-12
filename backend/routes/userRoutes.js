const express = require('express')
const router = express.Router()
const {
  registerUser, 
  loginUser,
  getUserData

} = require('../controllers/userController')

const {protect} = require('../middleware/authMidleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/auth', protect, getUserData)

module.exports = router