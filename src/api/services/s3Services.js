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
            Key: `user/${name}/${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype,
        }
    })
    return await Promise.all(
        params.map(param => s3.send(new PutObjectCommand(param)))
    )
    //const command = new PutObjectCommand(params)
    //await s3.send(command)
}

module.exports ={s3UploadAll}