const express = require('express')

require('dotenv').config()
const app =  express()

app.get('/',(req,res)=>{
    res.send(`${process.env.PORT}\n${process.env.MYSQL_USER} MODIFICADO`)
})



app.get('/about',(req,res)=>{
    res.send('<h1>Acerca de...</h1>')
})



let PORT = process.env.PORT || '3000'

app.listen( PORT,(req,res)=>{
    console.log(`server running on port ${PORT}`);
})