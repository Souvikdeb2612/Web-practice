const express=require('express');
const app =express();
const methodOverride=require('method-override');
const {v4:uuid}=require('uuid');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// dummy data
let comment= [
{
    id:uuid(),
    name:"souvik",
    text:"hello man"
},
{
    id:uuid(),
    name:"bidipta",
    text:"what is up"
},
{
    id:uuid(),
    name:"riddhi",
    text:"hey people"
}]


// show all the comments
app.get('/comments',(req,res)=>{
    res.render('comments/index', {comment});
} )

// get form to add data 
app.get('/comments/update',(req,res)=>{
    res.render('comments/update');
})

// pushing new comment
app.post('/comments',(req,res)=>{
    const {name, text}=req.body;
    comment.push({name,text,id:uuid()});
    res.redirect('/comments');
})

// form for editing a comment
app.get('/comments/:id/edit', (req,res)=>{
    const {id} =req.params;
    const foundComment = comment.find(c=> c.id===id);
    res.render('comments/edit',{comment:foundComment});
})

// Delete a comment
app.delete('/comments/:id',(req,res)=>{
    const {id}=req.params;
    const temp= comment.filter(c=>c.id!==id);
    comment=temp;
    res.redirect('/comments');
})

// edit comment
app.patch('/comments/:id', (req,res)=>{
    const {id} =req.params;
    const foundComment = comment.find(c=> c.id===id);
    const updatedComment = req.body.text;
    foundComment.text = updatedComment;
    res.redirect('/comments');
})




// show one comment
app.get('/comments/:id',(req,res)=>{
    const {id} =req.params;
    const foundComment = comment.find(c=> c.id===id);
    res.render('comments/show',{comment:foundComment});
})




app.get('/', (req,res)=>{
    res.send('hello');
})
app.listen(8080,()=>{
    console.log('server is listening at port 8080');
})