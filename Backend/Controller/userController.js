
const AddressModel = require('../Model/addressModel')
const TokenModel = require('../Model/tokenModel')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const UserModel = require('../Model/userModel')
const sendEmail = require('../Utils/emailSender') 
const jwt = require('jsonwebtoken')
const{expressjwt} = require('express-jwt')
exports.register = async(req,res)=>{

    // let {username,email,password,dateOfBirth,gender,street,phoneNumber,state,zipcode,country,city}=req.body
    let {username,email,password}=req.body
    //check if username already exists

    let user = await UserModel.findOne({username})
    if(user){
        return res.status(400).json({error:"Username already exists:Please choose another username"})
    }
    //check if email already used
    user = await UserModel.findOne({email})
    if(user){
        return res.status(400).json({error:"Email already exists:Please choose another email"})
    }
    //record the address->id
    // let address = await AddressModel.create({
    //     street,city,country,zipcode,state
    // })
    // if(!address){
    //     return res.status(400).json({error:"Something went wrong"})
    // }
//ecnrypt password we use crypto which is the node pacakge which is more difficult to userstand also and bcrypt we use bcrypt
  //salt is a keyword used in bcrypt
    let salt = await bcrypt.genSalt(10)
    let hash_password = await bcrypt.hash(password,salt)
    //register

    let new_user = await UserModel.create({
        username,
        email,
        password :hash_password,
        // phoneNumber,
        // gender,
        // dateOfBirth,
        // address:address._id
    })

    //generate token
    let token = await TokenModel.create({
        token:crypto.randomBytes(24).toString('hex'),
        user:new_user._id
    })

    //send verfication link(generate token) in email
     
    const url = `http://localhost:3000/verifyEmail/${token.token}`

    sendEmail({
        from:"noreply@something.com",
        to:email,
        subject :"Verification Email",
        text:`Copy paste the link in the browser to verify your account.${url}`,
        html:`<a href ='${url}'><button>Verfify Account</button></a>`
    })

    if(!new_user){
        return res.status(400).json({error:"Failed to register"})
    }
    res.send(new_user)
}

//to verify user 

exports.verfiyUser = async(req,res)=>{
    //check token if valid or not
    let token = await TokenModel.findOne({token:req.params.token})
    if(!token){
        return res.status(400).json({error:"Invalid token or token may expire"})
    }
    //find user

    let user = await UserModel.findById(token.user)
        if(!user){
            return res.status(400).json({error:"User associated with this token not found "})
        }

        //check if alreday verified
        if(user.isVerfied){
            return res.status(400).json({error:"User already verified .Login to conform"})
        }

        //verify user
        user.isVerfied = true
        user = await user.save()
        if(!user){
            return res.status(400).json({error:"Failed to verify.Please try again later"})
        }
        res.send({message: "user verfied successfully"})


        
}

//resend verfication

exports.resendVerfication = async(req,res)=>{
    //find if email is register or not

    let user = await  UserModel.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"Email not register "})
    }

    //chexk if password is valid or not

    let passwordCheck= await bcrypt.compare(req.body.password,user.password)
    if(!passwordCheck){
        return res.status(400).json({error:"Password Incoreect"})
    }

    //check is user is alreday verified
    if(user.isVerfied){
        return res.status(400).jspn({error:"User is already verfied"})
    }
    //generate token, send verfication link in the email

    let token = await TokenModel.create({
        token : crypto.randomBytes(24).toString(('hex')),
        user:user._id
    })
    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    }

    const url = `http://localhost:3000/verfiyEmail/${token.token}`
    sendEmail({
        from:"noreply@something.com",
        to:req.body.email,
        subject :"verification Email",
        text:`Copy paste the link in the browser to verify your account${url}`,
        html:`<a href =' ${url}'><button>Verfify Account</button></a>`
    })
    res.send({message:"Verfication link is send to your email."})


}

//forget password
exports.forgetPassword = async (req,res)=>{
    //find if email is register or not

    let user = await UserModel.findOne({email:req.body.email})
    if(!user){
        return res.status(400).json({error:"Email not register "})
    }
    //check is user is alreday verified
    // if(user.isVerfied){
    //     return res.status(400).jspn({error:"User is already verfied"})
    // }
    //generate token, send verfication link in the email

    let token = await TokenModel.create({
        token : crypto.randomBytes(24).toString(('hex')),
        user:user._id
    })
    if(!token){
        return res.status(400).json({error:"Something went wrong"})
    }

    const url = `http://localhost:3000/resetpassword/${token.token}`
    sendEmail({
        from:"noreply@something.com",
        to:req.body.email,
        subject :"Reset Password",
        text:`Copy paste the link in the browser to reset your password${url}`,
        html:`<a href ='${url}'><button>Reset Password</button></a>`
    })
    res.send({message:"Reset password link is send to your email."})
}

//reset password
exports.resetPassword = async(req,res)=>{
    //check token
    let token = await TokenModel.findOne({token:req.params.token})
    if(!token){
        return res.status(400).json({error:"Invalid token or token may expire"})
    }

    //find user
    let user = await UserModel.findById(token.user)
    if(!user){
        return res.status(400).json({error:"Something went wrong "})
    }

    //change password
    let salt_rounds = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(req.body.password,salt_rounds)

    user = await user.save()
    if(!user){
        return res.status(400).json({error:"Something went wrong "})
    }
    res.send({message:"password has been reset successfully"})

}


//----------------------------Login-------------------------------------
exports.signIn = async(req,res)=>{

    let{email,password}= req.body
    //check if email is register or not
    let user = await UserModel.findOne({email})
    if(!user){
        return res.status(400).json({error:"Email not register "})
    }
    //check if password is correct or not

    let passwordCheck = await bcrypt.compare(password,user.password)
    if(!passwordCheck){
        return res.status(400).json({error:"Password is wrong "})
    }
    //check if verified or not
    if(!user.isVerfied){
        return res.status(400).json({error:"User is not verified.Verify First"})
    }
    //genetate token
    let{username,role,_id} =  user
     let token = jwt.sign({username,role,_id},process.env.JWT_SECRET,{expiresIn:86400})

    //send data to frontend

    res.cookie('myCookie',token, {expiresIn:86400})
    res.send({token,user:{_id,username,email,role}})
}

//logout

exports.logout = (req,res)=>{
    res.clearCookie()
    res.send({message:"Logout successfully"})

}


//userlist

exports.getUserList = async(req,res)=>{
    let users = await UserModel.find()
    if(!users){
        return res.send(400).json({error:"Something went wrong"})
    }
    res.send(users)
}


//make admin
exports.makeAdmin = async(req,res)=>{
    let users = await UserModel.findOne({email:req.body.email})
    if(!users){
      return res.send(400).json({error:"Email  not register"})
    }
    users.role = 1
    users = await users.save()
    if(!users){
        return res.send(400).json({error:"Something went wrong"})
    }
    res.send({message:"New admin added"})
}


//authorization
//user logged in or not - eg to view own 
exports.authorizeLogin = (req,res,next)=>expressjwt({
    algorithms:['HS256'],
    secret :process.env.JWT_SECRET

})(req,res,(error)=>{
    if(!error){
        return res.status(500).json({error:"Login to continue"})
    }
    next()
})

//authorize --check role
exports.checkAdmin= (req,res,next)=>expressjwt.jwt({
    algorithms:['HS256'],
    secret :process.env.JWT_SECRET,
    userProperty:"auth"
})(req,res,(error)=>{
    if(error){
        res.status(400).json({error,error})
    }   
    else if(req.auth.role===1){
        next();
    } 
    else{
        res.status(400).json({error:"Unauthorized access"})
    }

}); 


//change user role

exports.changeRole = async(req,res) =>{
    let user = await UserModel.findByIdAndUpdate(req.params.id,{
        role:req.body.role
    },{new:true})
    if(!user){
      return res.status(400).json({error:"Something went wrong"})
    }
    res.send({message:'User role updated'})
}