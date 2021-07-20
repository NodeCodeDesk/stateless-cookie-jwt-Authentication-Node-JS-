const userModel = require('../model/userModel')
const { verifyToken,generateToken} = require('./authController')


const emailExist = async(email)=>{
    try {
        const result = await userModel.findOne({email: email});
        return {id: result._id, username: result.name}
    } catch (error) {
        return error
    }
}

const login = async (req,res)=>{
    const email = "abcd1@gmail.com"
    try {
        const result = await emailExist(email)

        const { id, username } = result
        await generateToken(res,id,username)

        res.redirect('/')
    } catch (error) {
        return res.send(error)
    }
}

const logout = (req,res)=>{
        res.clearCookie('token');
        res.redirect('/')
}

module.exports = { login, logout }
