const prisma = require('../../../prisma/index')

const credentianlCheck = async (name, email, password) => {
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
    return user
}

module.exports = credentianlCheck;