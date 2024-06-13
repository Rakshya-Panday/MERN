const ProductModel = require('../Model/productModel') 
const fs = require('fs')

//add new product 
exports.addProduct = async(req,res)=>{
    try{
        let product = await ProductModel.create({
            //left side from schema and right side from form of frontend
            title : req.body.title,
            price : req.body.price,
            description : req.body.description,
            category: req.body.category,
            count_in_stock : req.body.count_in_stock,
            product_image : req.file?.path
            
        })
        if(!product){
            return res.status(400).json({error:"Something went wrong"})
        }
        res.send(product)

    }
    catch(error){
        res.status(400).json({error:error.message})
    }
   

}

//get all products
exports.getAllProducts = async (req,res)=>{
    let products = await ProductModel.find().populate('category','category_name')
    if(!products){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(products)

}

//get all productDetails

exports.getAllProductDetails = async (req,res)=>{
    let productsDetails = await ProductModel.findById(req.params.id).populate('category')
    if(!productsDetails){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(productsDetails)
} 

//get product by categopry

exports .getProductByCategory = async (req,res)=>{
    let products = await ProductModel.find({
        category : req.params.category_id
    }).select('title').select('rating')
    if(!products){
        return res.status(400).json({error:"Something went wrong"})
    }
    res.send(products)
    
}

//update product

exports.updateProduct = async(req,res)=>{
    try {
        if(req.file){
            fs.unlink(req.body.imageUrl,(error)=>{
                if(error){
                    console.log(error)
                }
            })
        }
        let product = await ProductModel.findByIdAndUpdate(req.params.id,{
            title : req.body.title,
            price:req.body.price,
            description:req.body,description,
            category:req.body.category,
            count_in_stock : req.body.count_in_stock,
            product_image:req.file?.path
    
        },{new:true})
        if(!product){
            return res.status(400).json({error:"Something went wrong"})
    
        }
        res.send(product)
        
    } catch (error) {
        res.status(500).json({error:"error.message"})
    }
}

//delete product

exports.deleteProduct = async(req,res)=>{
    ProductModel.findByIdAndDelete(req.params.id)
    .then(product=>{
        if(!product){
            return res.status(400).json({error:"Product not found"})
        }
        else{
            res.send({message:"Product deleted successfully"})
        }
    })
    .catch(error=> res.status(500).json({error:error.message}))
    
}