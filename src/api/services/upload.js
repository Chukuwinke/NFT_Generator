const fs = require("fs");
const multer = require("multer");
const uuid = require("uuid").v4;
const {getFiles} =require("./processImage")

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        const {name} = req.body;
        //console.log(name);
        const dir = `src/uploads`;
        if(!fs.existsSync(dir)){
            return fs.mkdir(dir, error => cb(error, dir));
        }
        return cb(null, dir);
    },
    filename: (req, file, cb) =>{
        const {originalname} = file;
        cb(null, `${uuid()}-${originalname}`);
    }

})
const uploadMulter = multer({storage});


const imageDataprocess = (req, res) =>{
    const {name} = req.body;
    const files = req.files;
    const layer = {[name]: files};
    getFiles()
    console.log(layer);
    //console.log(files);
    res.json({status : "success"});

}

module.exports = { imageDataprocess, uploadMulter }