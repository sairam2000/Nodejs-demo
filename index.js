const express = require('express')
const mongoose = require('mongoose')
const {MONGO_URI} = require('./KEYS')
const product = require('./routes/Product')
const category = require('./routes/Categories')

app = express()
app.use(express.json())                  // this allows to pass json to routes


// Mongoose Connection starts

mongoose.connect(MONGO_URI, { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.on('connected',()=>{
    console.log('db connected');
});
mongoose.connection.on('error',(err)=>{
    console.log(err);
});

//  mongoose connection ends

// defining routes starts

app.use('/product', product)
app.use('/category', category)

//definig routes ends


app.listen(3000,()=>{
    console.log('server running at port 3000')}
)


