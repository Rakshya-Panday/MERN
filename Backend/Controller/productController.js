const ProductModel = require('../Model/productModel')

//add new product 
exports.addProduct = async(req,res)=>{
    try{
        let product = await ProductModel.create({
            //left side from schema and right side from form of frontend
            title : req.body.title,
            price : req.body.price,
            description : req.body.description,
            category: req.body.category,
            counting_stock : req.body.counting_stock,
            product_image : req.file?.path
            
        })
        if(!product){
            return res.send(400).json({error:"Something went wrong"})
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
        return res.send(400).json({error:"Something went wrong"})
    }
    res.send()

}

//get all productDetails

exports.getAllProductDetails = async (req,res)=>{
    let productsDetails = await ProductModel.findById(req.params.id).populate('category')
    if(!productsDetails){
        return res.send(400).json({error:"Something went wrong"})
    }
    res.send()
} 

//get product by categopry

exports .getProductByCategory = async (req,res)=>{
    let products = await ProductModel.find({
        category : req.params.category_id
    }).select('title').select('rating')
    if(!products){
        return res.send(400).json({error:"Something went wrong"})
    }
    res.send()
    
}