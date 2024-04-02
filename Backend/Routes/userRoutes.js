const { register, verfiyUser, resendVerfication, resetPassword } = require('../Controller/userController')

const router = require('express').Router()


router.post('/register',register)
router.get('/verifyemail/:token',verfiyUser)
router.post('/resendverification',resendVerfication)
router.post('/resetpassword',resetPassword)

module.exports = router