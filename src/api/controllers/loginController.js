const cookieToken = require('../../utils/cookieToken')
const loginCheck = require('../services/loginServices')

// login
exports.login = async (req, res) =>{
    const {email, password} = req.body
    try {
        const user = await loginCheck(email, password)

        cookieToken(user, res)
        
    } catch (error) {
        throw new Error(error)
    }
}

// logout
exports.logout = async (req, res) =>{
    try {
        res.clearCookie('token');
        res.status(200).json({
            success: true
        })
    } catch (error) {
        throw new Error("not posible to clear cookies")
    }
}