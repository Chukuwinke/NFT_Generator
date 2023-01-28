const prisma = require('../../../prisma/index')
const loginCheck = async (email, password) =>{
    if(!email || !password){
        throw new Error("please provide credentials")
    }

    // find user 
    const user = await prisma.user.findUnique({
        where:{
            email
        }
    })

    // if user is not in the database 
    if(!user){
        throw new Error("user not found")
    }

    // if user password is not equals to the password
    if(user.password !== password){
        throw new Error("password does not match")
    }

    return user

}


module.exports = loginCheck;