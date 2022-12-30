const express = require("express");
const router = express.Router();
const {uploadAllImages, uploadMulter} = require("../controllers/upload")

router.post("/upload", uploadMulter.array("file"), uploadAllImages);

module.exports = router;    





// const fs = require("fs")
// const express = require("express");
// const multer = require("multer");
// const uuid = require("uuid").v4;
// const router = express.Router();

// const storage = multer.diskStorage({
//     destination: (req, file, cb) =>{
//         const {name} = req.body;
//         console.log(name)
//         const dir = `src/uploads/${name}`;
//         if(!fs.existsSync(dir)){
//             return fs.mkdir(dir, error => cb(error, dir));
//         }
//         return cb(null, dir);
//     },
//     filename: (req, file, cb) =>{
//         const {originalname} = file;
//         cb(null, `${uuid()}-${originalname}`)
//     }

// })
// const uploadMulter = multer({storage})
// router.post("/upload", uploadMulter.array("file"), (req, res, next) => {
//     console.log(req.files);
//     console.log(req.body)
//     res.json({status : "success"});
// });

// module.exports = router;