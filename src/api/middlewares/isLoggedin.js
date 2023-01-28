const prisma = require('../../../prisma/index')

const jwt = require('jsonwebtoken')

const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookie.token

        if(!token){
            res.send("please login")
            throw new Error("user are not logged in")
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded == undefined){
            throw new Error("user cookie not valid")
        }

        req.user = await prisma.user.findUnique({
            where: {
                id : decoded.userId
            }
        })
        next()

    } catch (error) {
        throw new Error(error)
    }
}