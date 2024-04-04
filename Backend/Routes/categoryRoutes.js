const { addCategory, getAllCategories, updateCategory, deleteCategory } = require('../Controller/categoryController');
const { checkAdmin } = require('../Controller/userController');
const { categoryCheck, validate } = require('../validation');

const router = require('express').Router()

    //endpoints
    router.post('/addcategory',checkAdmin,categoryCheck,validate, addCategory)
    router.get('/addcategory/:id',addCategory)

    // router.get('/getallcategories',getAllCategories)
    router.get('/getallcategories', checkAdmin,getAllCategories)

    router.put('/updatecategory/:id', checkAdmin,updateCategory)
    router.delete('/deletecategory/:id', checkAdmin,deleteCategory)
module.exports = router

