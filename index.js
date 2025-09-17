const express = require('express')
const app = express()

const loginRoutes = require('./routes/loginRoutes')

app.use(loginRoutes)
app.listen(3000, function(){
    console.log('APP rodando na porta 3000')
});