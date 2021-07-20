const userCollection = require('../model/userModel')
const { verifyToken,generateToken} = require('./authController')


const emailExist = (email)=>{
    try {
        const result = userCollection.find({email: email});
        return {id: result._id, firstname: result.username}
    } catch (error) {
        return error
    }
}

const login = async (req,res)=>{
    const email = 'me@me2.com';
    try {
        const result = await emailExist(email)
        const { id, firstname } = result;

        await generateToken(res,id,firstname)

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