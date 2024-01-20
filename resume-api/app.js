//multer: middleware for handling multipart form data for text and files also
//cors: middleware to connect frontend  to back smoothly

import express from 'express'
import connectdb from './db/connectdb.js'
import {join} from 'path'
import path from 'path'
import web from "./routes/web.js"

const app=express()


//database connection
connectdb()


 //middleware for parsing json
 app.use(express.json()) 

 //middleware for parsing mutipart form data
 

 //load routes
app.use('/resume',web)

app.listen('8000',()=>{
    console.log(`Server listening `)
})