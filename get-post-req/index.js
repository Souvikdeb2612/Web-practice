const express = require('express')
const app =express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/user',(req,res)=>{
    res.render('form')
})

app.post('/user',(req,res)=>{
    res.render('form')
    console.log(req.body)
    
})

app.get('/', (req,res)=>{
    console.log('hello')
    res.send('hello')
    console.log(req.params)
})


app.listen(8080, ()=>{
    console.log('Server listening at port 8080')
})