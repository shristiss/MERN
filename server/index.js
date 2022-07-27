import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentroutes from './routes/student.js';


const app=express();


app.use(cors());
app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));
app.use('/students',studentroutes);


const Connection_url ='mongodb+srv://shristiss20:shristiss20@cluster0.e5nvj.mongodb.net/?retryWrites=true&w=majority'

var port=5000;
//console.log('hello'+port )
mongoose.connect(Connection_url).then(()=> app.listen(port,()=>console.log('connection is established and running on port:'+port))).catch((err)=>console.log(err.message));

