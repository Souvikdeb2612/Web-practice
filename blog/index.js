const express = require('express')
const app = express();
const methodOverride=require('method-override');
const {v4: uuid} =require('uuid');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

let blogs= [
    {
        id:uuid(),
        title:"TITLE 1",
        author:"souvik",
        image:"https://images.unsplash.com/photo-1552083375-1447ce886485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:uuid(),
        title:"TITLE 2",
        name:"bidipta",
        image:"https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id:uuid(),
        title:"TITLE 3",
        name:"riddhi",
        image:"https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }]

// show homepage
app.get('/blogs', (req,res)=>{
    res.render('blogs/index',{blogs})
})

// get edit form
app.get('/blogs/new',(req,res)=>{
    res.render('blogs/new')
})



// add new blog
app.post('/blogs',(req,res)=>{
    const {title, name,image, text}= req.body;
    blogs.push({title,name,image,text,id:uuid()});
    res.redirect('/blogs');
})

// Get edit form
app.get('/blogs/:id/edit',(req,res)=>{
    const {id} =req.params;
    const foundblog = blogs.find(b=> b.id===id);
    res.render('blogs/edit',{blogs:foundblog});
})

// show edited blog
app.patch('/blogs/:id',(req,res)=>{
    const {id} =req.params;
    const foundblog = blogs.find(b=> b.id===id);
    const edTitle = req.body.title;
    const edImage = req.body.image;
    const edText = req.body.text;
    foundblog.title=edTitle;
    foundblog.image=edImage;
    foundblog.text=edText;
    res.render('blogs/show',{blogs:foundblog});
})


// delete a blog
app.delete('/blogs/:id',(req,res)=>{
    const {id} =req.params;
    const temp = blogs.filter(b=> b.id!==id );
    blogs=temp;
    res.redirect('/blogs');
})


// show one blog
app.get('/blogs/:id',(req,res)=>{
    const {id} =req.params;
    const foundblog = blogs.find(b=> b.id===id);
    res.render('blogs/show',{blogs:foundblog});
    
})


app.listen(3000, ()=>{
    console.log("Listening on port 3000")
})