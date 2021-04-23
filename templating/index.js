const express = require('express');
const app =express();
const path=require('path');

const todo=['gym', 'water',' play', 'eat'];
const product={
    img:"https://images.unsplash.com/photo-1618598477738-bf2dc2c09bed?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    name:"hello",
    price:"2000",
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.use(express.static('public'));

app.get('/home', (req,res)=>{
    const num = Math.floor(Math.random()*10+1);
    res.render('home', {randomNum:num,todo});
})

app.get('/random', (req,res)=>{
    res.render('random',{product})
})

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