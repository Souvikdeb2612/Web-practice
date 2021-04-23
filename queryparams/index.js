const express = require('express');
const app =express();


app.get('/', (req,res)=>{
    res.send('This is the root page');
} )

app.get('/search',(req,res)=>{
    console.log(req.query);
    const {username} = req.query;
    const {age} = req.query;
    res.send(`Hello from ${username} aged ${age}`);
})

app.listen(3000, ()=>{
    console.log('server is listening at port 3000');
})