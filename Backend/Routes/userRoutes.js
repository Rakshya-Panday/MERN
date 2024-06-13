const { register, verfiyUser, resendVerfication,  forgetPassword, resetPassword, signIn, logout, getUserList, makeAdmin, changeRole } = require('../Controller/userController')
const { userCheck, validate } = require('../validation')

const router = require('express').Router()


router.post('/register', userCheck,validate, register)
router.get('/verifyemail/:token',verfiyUser)
router.post('/resendverification',resendVerfication)
router.post('/forgetpassword',forgetPassword)
router.post('/resetpassword',resetPassword)
router.post('/login',signIn)
router.get('/logout',logout)
router.get('/userlist',getUserList)
router.post('/admin',makeAdmin)
router.put('/changerole/:id',changeRole)

module.exports = router