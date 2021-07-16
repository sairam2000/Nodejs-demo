const express = require('express')
const mongoose = require('mongoose')
const {MONGO_URI} = require('./KEYS')


app = express()

// Mongoose Connection starts

mongoose.connect(MONGO_URI, { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
    console.log('db connected');
});
mongoose.connection.on('error',(err)=>{
    console.log(err);
});

//  mongoose connection ends


app.get('/',(req,res)=>{
    res.status(200).send('hello world!!')
})

app.listen(3000,()=>{
    console.log('server running at port 3000')}
)


