const {
    imageDataprocess,
    uploadMulter
}= require("../services/upload")

const uploadAllImages =  (req, res) =>{
    //console.log(req.body)
    imageDataprocess(req, res)
}

module.exports ={ uploadAllImages, uploadMulter }