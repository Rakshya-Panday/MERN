const {validationResult,check} = require('express-validator')

exports.categoryCheck = [
    check('category_name','Category name is required').notEmpty()
    .isLength({min:3}).withMessage("Category name must be at least 3 character")
]

exports.validate = (req,res,next)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()[0].msg}) //for single error
        return res.status(400).json({error:errors.array().map(err=>err.msg)}) // for all error 
    }
}