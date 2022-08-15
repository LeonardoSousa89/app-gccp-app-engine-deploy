const port=8081
const server=require('./views/server')
const express=require('express')
const app=express()

app.use('/static', express.static('public'))
app.use('/',server)

app.listen(process.env.PORT  || port)
//localhost:8081
//http://localhost:8081/static/index.scss
