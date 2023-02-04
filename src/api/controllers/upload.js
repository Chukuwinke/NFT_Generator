const prisma = require("../../../prisma/index");
const {imageDataprocess}= require("../services/upload")

const createProject = async (req, res, next) =>{
    try {
        const {title, authorId} = req.body;
        const projectResult = await prisma.project.create({
            data:{
                title: title,
                author:{connect: {id: authorId}}
            }

        })
        res.json({status : "success", projectResult});
    } catch (error) {
        throw new Error(error)
    }
}
const uploadAllImages =  async (req, res) =>{
    //console.log(req.body)
    try {
        const {cred} = req.body
        const project = JSON.parse(cred)
        //console.log(project)

        const {id, title, authorId} = project;
        const {name, keys, metaD} = await imageDataprocess(req, res);
        //console.log(metaD)

        

        const layerSch = await prisma.layer.create({
             data:{
                 title: name,
                 images: keys,
                 project:{connect: {id:id}}
             }
        })
        
        res.json({status : "success", layerSch});
    } catch (error) {
        throw new Error(error)
    }
    
}

module.exports ={ uploadAllImages, createProject }