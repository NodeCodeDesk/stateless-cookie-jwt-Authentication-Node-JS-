const jwt = require('jsonwebtoken')
const JWT_SECRET = 'RestFullAuth';

/* you can't view the cookie on client side if you set the following 
({ secure:true, httpOnly:true}) -secure means it should only use the cookie 
over an https network while -httpOnly means the cookie should be read by 
any client side Javascript*/
const generateToken = (res,id,firstname)=>{
    const expiration = 1000 * 60 * 60
    const token = jwt.sign({id:'25',username: 'mahesh1'},JWT_SECRET)

    return res.cookie('token',token,{
        expires: new Date(Date.now() + expiration),
        secure: false,
        httpOnly: true
    })
}

const verifyToken = async (req,res)=>{
    try {
        const token = req.cookies.token
        if(!token) return res.send('You need to login')

        await jwt.verify(token,JWT_SECRET,(err,data)=>{
            if(err)res.send(err)

            req.user = {
                id: data.id,
                firstname: data.username,
                }

            res.send(req.user)
        });
        
    } catch (error) {
         res.send(error)        
    }
}

module.exports = { verifyToken, generateToken }