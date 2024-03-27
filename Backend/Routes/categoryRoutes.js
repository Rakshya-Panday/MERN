const { addCategory, getAllCategories, updateCategory, deleteCategory } = require('../Controller/categoryController');

const router = require('express').Router()

    //endpoints
    router.post('/addcategory',addCategory)
    router.get('/addcategory/:id',addCategory)

    // router.get('/getallcategories',getAllCategories)
    router.get('/getallcategories',getAllCategories)

    router.put('/updatecategory/:id',updateCategory)
    router.delete('/deletecategory/:id',deleteCategory)
module.exports = router

