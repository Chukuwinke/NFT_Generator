 const { S3Client, AbortMultipartUploadCommand, PutObjectCommand } = require("@aws-sdk/client-s3");

const bucketName = process.env.BUCKET_NAME
const bucketRegion =process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3 = new S3Client({
    credentials:{
        accessKeyId:accessKey,
        secretAccessKey:secretAccessKey,
    },
    region:bucketRegion
})

const s3UploadAll = async (name, files) =>{
    // const param ={
    //     Bucket: bucketName,
    //     Key: `user/${req.file.originalname}`,
    //     Body: req.file.buffer,
    //     ContentType: req.file.mimetype,
    // }
    const params = files.map(file => {
        return {
            Bucket: bucketName,
            // i need to find a way to store the key variables
            Key: `user/${name}/${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype,
        }
    })
    const keys = []
    const metaD = await Promise.all(
        params.map(param => {
            keys.push(param.Key)
            return s3.send(new PutObjectCommand(param))
        })
    )
    return {
        name,
        keys,
        metaD
    }
    //const command = new PutObjectCommand(params)
    //await s3.send(command)
}

module.exports ={s3UploadAll}