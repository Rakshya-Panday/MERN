const express = require('express')
const { placeOrder, getAllOrders, getOrderDetails, getOrdersByUser, updateOrder, deleteorder } = require('../Controller/orderController')
const router = express.Router()
router.post('/placeorder',placeOrder)
router.get('/getorder',getAllOrders)
router.get('/orderdetails/:id',getOrderDetails)
router.get('/orderbyuser/:user_id',getOrdersByUser)
router.put('/updateorder/:id',updateOrder)
router.delete('/deleteorder/:id',deleteorder)

module.exports = router