const UserModel = require('../Model/userModel')
const AddressModel = require('../Model/addressModel')
const bcrypt = require('bcrypt')

exports.register = async(req,res)=>{

    let {username,email,password,dateOfBirth,gender,street,phoneNumber,state,zipcode,country}=req.body
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
    let address = await AddressModel.create({
        street,city,country,zipcode,state
    })
    if(!address){
        return res.status(400).json({error:"Something went wrong"})
    }
    //ecnrypt password
  //salt is a keyword used in bcrypt
    let salt = await bcrypt.genSalt(10)
    let hash_password = await bcrypt.hash(password,salt)
    //register

    let new_user = await UserModel.create({
        username,
        email,
        hash_password,
        phoneNumber,
        gender,
        dateOfBirth,
        address:address._id
    })

    //send verfication link(generate token) in email

    if(!new_user){
        return res.status(400).json({error:"Failed to register"})
    }
    res.send(new_user)
}