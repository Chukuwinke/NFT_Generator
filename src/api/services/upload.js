const fs = require("fs");
const uuid = require("uuid").v4;
const {getFiles} =require("./web3Storage")
const {s3UploadAll} = require("./s3Services")

// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         const {name} = req.body;
//         //console.log(name);
//         const dir = `src/uploads`;
//         if(!fs.existsSync(dir)){
//             return fs.mkdir(dir, error => cb(error, dir));
//         }
//         return cb(null, dir);
//     },
//     filename: (req, file, cb) =>{
//         const {originalname} = file;
//         cb(null, `${uuid()}-${originalname}`);
//     }

// })

const imageDataprocess = async (req, res) =>{
    const {name} = req.body;
    const files = req.files;
    
    const layer = {[name]: files};
    
    const results = await s3UploadAll(name, files)
    //getFiles()
    //const layer = {[name]: files};
    //console.log(results);
    //console.log(files);
    //res.json({status : "success"});
    return results;
}

module.exports = { imageDataprocess}