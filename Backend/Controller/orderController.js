const OrderModel = require('../Model/orderModel')

const UserModel = require('../Model/userModel')

const productModel = require('../Model/productModel')
const orderItemsModel = require('../Model/orderItemsModel')


//place order

exports.placeOrder = async(req,res)=>{
    let orderItemsIds = await Promise.all(
    req.body.orderItems.map( async OrderItems=>{
        let orderItem = await OrderItemSchema.create({
             product:OrderItems.product,
             quantity:OrderItems.quantity
        })
        if(!orderItem){
            return res.status(400).json({error:"Something went wrong"})
        }
        return orderItem._id

    })
)

let individual_total = await Promise.all(
    orderItemsIds.map(async item_id=>{
        let item = await orderItemsModel.findById(item_id).populate('product','price')
        return item.product.price*item.quantity
    })
)

let total = individual_total.reduce((acc,cur)=>acc+cur)
let address
if(req.body.address){
     address = await AddressModel.create({
        street:req.address.street,
        city:req.address.city,
        country:req.address.country,
        phone:req.address.phone,
        zipcode:req.address.zipcode,
        state:req.address.state,
        country_code:req.address.country_code
    })
} 

let user = await UserModel.findById(req.body.user)

let order = await OrderModel.create({
    orderItems:orderItemsIds,
    total:total,
    user:req.body.user,
    address:req.body.address?address._id:user.address
})

if(!order){
    return res.status(400).json({error:"Failed to place order"})
}
res.send(address)

}