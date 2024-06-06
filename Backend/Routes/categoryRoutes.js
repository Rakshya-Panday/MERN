const { addCategory, getAllCategories, updateCategory, deleteCategory, getCategoryDetails } = require('../Controller/categoryController');
const { checkAdmin } = require('../Controller/userController');
const { categoryCheck, validate } = require('../validation');

const router = require('express').Router()

    //endpoints
    router.post('/addcategory',categoryCheck,validate, addCategory)
    router.get('/categorydetails/:id',getCategoryDetails)

    // router.get('/getallcategories',getAllCategories)
    router.get('/getallcategories',getAllCategories)

    router.put('/updatecategory/:id',updateCategory)
    router.delete('/deletecategory/:id', checkAdmin,deleteCategory)
module.exports = router

