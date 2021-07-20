const { login, logout } = require('../controller/userController')

const routes = (app)=>{
    app.get('/login',login)
    app.get('/logout',logout)
}

module.exports = routes