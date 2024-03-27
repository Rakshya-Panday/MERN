const categoryModel = require('../Model/categoryModel')


//insert into database 
// we can add data into database using two methods 1. using new keyword 2. using the create method.
exports.addCategory = async (req,res)=>{

    // let categoryObj = new categoryModel({
    //     category_name : req.body.category_name
    // })

    // categoryObj = await categoryObj.save()


    let category = await categoryModel.findOne({
        category_name: req.body.category_name
    })
    if(category){
        return res.status(400).json({error:"category alreday exists"})
    }
    let categoryObj = await categoryModel.create({
        category_name : req.body.category_name
    })
    if(!categoryObj){
        //error
        return res.status(400).json({error:"Something went wrong"})
    }
    //success
    res.send(categoryObj)
}

//to get all categories

exports.getAllCategories = async(req,res)=>{
    let categories = await categoryModel.find()
    if(categories){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(categories)
}

//to get category deatils

exports.getCategoryDetails = async(req,res)=>{
    let category = await categoryModel.findById(req.params.id)
    if(!category){
        return res.status(400).json({error : "Something went wrong"})
    }
    res.send(category)
}

//update Category 

exports.updateCategory = async(req,res)=>{
    let categoryToUpdate = await categoryModel.findByIdAndUpdate(req.params.id,{
        category_name : req.body.category_name
    },{new:true})
    if(!categoryToUpdate){
        return res.status(400).json({error:"Failed to update"})
    }
}

//delete Category

exports.deleteCategory = async(req,res)=>{
    categoryModel.findByIdAndDelete(req.params.id)
    .then(deletedCategory=>{
        if(!deletedCategory){
             return res.status(400).json({error:"Category not found"})
        }
        res.send({message:"Category deleted Successfully"})
    })
    .catch(err=>res.status(400).json({error:err}))
}
//we can take input using various ways
// req.body
// req.params
// req.query
