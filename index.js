const express = require('express')
app = express()

app.get('/',(req,res)=>{
    res.status(200).send('hello world!!')
})

app.listen(3000,()=>{
    console.log('server running at port 3000')}
)


