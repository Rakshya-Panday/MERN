const { addProduct, getAllProducts, getAllProductDetails, getProductByCategory, updateProduct, deleteProduct } = require('../Controller/productController')
const upload = require('../Utils/fileUpload')
const { productCheck, validate } = require('../validation')

const router = require('express').Router()

router.post('/addnewproduct',upload.single('product_image'),productCheck,validate, addProduct)
router.get('/getallproducts',getAllProducts)
router.get('/getproductdetails/:id',getAllProductDetails)
router.get('/getproductbycategory/:category_id',getProductByCategory)
router.put('/updateproduct/:id',upload.single('product_image'),updateProduct)
router.delete('/deleteProduct/:id',deleteProduct)
module.exports = router