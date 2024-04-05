const {validationResult,check} = require('express-validator')

exports.categoryCheck = [
    check('category_name','Category name is required').notEmpty()
    .isLength({min:3}).withMessage("Category name must be at least 3 character")
]

exports.validate = (req,res,next)=>{
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:errors.array()[0].msg}) //for single error
        // return res.status(400).json({error:errors.array().map(err=>err.msg)}) // for all error 
    }
    next()
}

exports.productCheck = [
    check('title','Product title is required').notEmpty()
    .isLength({min:3}).withMessage("Product name must be at least 3 character"),

    check('price','Price is required').notEmpty()
    .isNumeric().withMessage('Price must be in number'),

    check('description',"Description is required").notEmpty()
    .isLength({min:20}).withMessage("Description must be more than 20 character"),

    check('countInStock',"count in stock is required")
    .isNumeric().withMessage('Count must be in number')
]


exports.userCheck=[
    check('username','Username is required').notEmpty()
    .isLength({min:3}).withMessage("Username must be at least 3 character"),

    check('email',"(Email is required").notEmpty()
    .isEmail().withMessage("Email is not formatted"),

    check('password',"Password is required").notEmpty()
    .not().matches("as").withMessage("not use")
    .matches(/[a-z]/).withMessage("Password must contain ay least 1 lower case")
    .matches(/[A-Z]/).withMessage("Password must contain ay least 1 Upper case")
    .matches(/[0-9]/).withMessage("Password must contain ay least 1 number")
    .matches(/[!@#$\-]/).withMessage("Password must contain ay least 1 special character")
    .isLength({min:8}).withMessage("Password mustcontain at least 8 charcter"),

    check("gender")
    .isIn(['male','female']).withMessage("Gender must be either male or female")
]