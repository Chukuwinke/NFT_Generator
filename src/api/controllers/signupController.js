
const credentianlCheck = require('../services/signupService')

const cookieToken = require('../../utils/cookieToken')

exports.signup = async(req, res) => {
    const {name, email, password} = req.body
    try {
        const user = await credentianlCheck(name, email, password)

        // send user a token
        cookieToken(user, res)


    } catch (error){
        throw new Error(error)
    }
}