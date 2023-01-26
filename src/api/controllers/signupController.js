// bring in prisma 

const prisma = require('../../../prisma/index')

const cookieToken = require('../../utils/cookieToken')

exports.signup = async(req, res) => {
    try {
        const {name, email, password} = req.body

        if (!name || !email || !password){
            throw new Error('please provide all fields')
        }
        const user = await prisma.user.create({
            data:{
                name,
                email,
                password,
            }
        })

        // send user a token
        cookieToken(user, res)


    } catch (error){
        throw new Error(error)
    }
}