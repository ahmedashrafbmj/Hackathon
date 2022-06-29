const express = require('express')
const router = express.Router()
const userCon = require('../controller/userController')
const isAuthUser = require('../middleware/isAuthUser')

router.post('/register',userCon.registerUser)
router.post('/login',userCon.loginUser)
router.get('/logout',userCon.logOutUser)
router.get('/me',userCon.getUserDetails)
router.get('/getallusers',userCon.getAllUser)
router.put('/updateprofile',userCon.updateProfile)
router.delete('/delete/:id',userCon.deleteUser)


module.exports = router