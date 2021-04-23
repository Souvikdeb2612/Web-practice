const expr=require('express')
const app=expr();

console.log(app)
// app.use((req,res)=>{
//     res.send('Hello from the server!!!');
// })

app.get('/r/:subredit',(req,res)=>{
   
    console.log(req.params);
    const {subredit} = req.params;
    res.send(`This is a ${subredit} subredit`)
})


app.listen(3000,()=>{
    console.log('Listening to the server');
})