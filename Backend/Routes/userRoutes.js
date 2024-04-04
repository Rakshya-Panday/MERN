const { register, verfiyUser, resendVerfication,  forgetPassword, resetPassword, signIn, logout, getUserList, makeAdmin } = require('../Controller/userController')

const router = require('express').Router()


router.post('/register',register)
router.get('/verifyemail/:token',verfiyUser)
router.post('/resendverification',resendVerfication)
router.post('/forgetpassword',forgetPassword)
router.post('/resetpassword',resetPassword)
router.post('/login',signIn)
router.get('/logout',logout)
router.get('/userlist',getUserList)
router.post('/admin',makeAdmin)

module.exports = router