const multer = require("multer")
const fs = require('fs') // file system
const path = require('path') //file path

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     let filepath = 'public/uploads'
     if(!fs.existsSync(filepath)){
        fs.mkdirSync(filepath,{recursive:true})
     }

      cb(null,filepath)
    },
    filename: function (req, file, cb) {
     let extname = path.extname(file.originalname)
     let basename = path.basename(file.originalname,extname)

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

      let filename = basename+'-' +uniqueSuffix + extname
      cb(null, filename)
    }
  }) 

  const fileFilter = (req, file,cb)=>{
    if(!file.originalname.match(/[.](jpg|jpeg|png|webp|gif|JPG|PNG|WEBP|SVG|svg)$/)){
      cb(new error("Invalid file type"),false)
    }
    cb(null,true)
  }
  
  const upload = multer({ 
    storage: storage,
    fileFilter : fileFilter,
    limits :{
      fileSize : 20000000
    }
   })

   module.exports = upload