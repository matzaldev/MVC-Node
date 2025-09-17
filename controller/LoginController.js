const LoginModel = require('../model/loginModel')

const login = new LoginModel()

const logged = login.isLogged()

exports.getLogin = ((req, res) => {
    res.send(`<h1>${login.isLogged()}</h1>`)
})

exports.getIsLogged = ((req, res) => {
    
    const login = new LoginModel()
    res.render("LoginView", {logged : logged});
});