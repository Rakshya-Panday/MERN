const { addProduct, getAllProducts, getAllProductDetails, getProductByCategory } = require('../Controller/productController')
const upload = require('../Utils/fileUpload')

const router = require('express').Router()

router.post('/addnewproduct',upload.single('product_image'), addProduct)
router.get('/getallproducts',getAllProducts)
router.get('/getproductdetails/:id',getAllProductDetails)
router.get('/getproductbycategory/:category_id',getProductByCategory)

module.exports = router