const image=document.querySelector('img');


let isTrue=false;
   

    setInterval(()=>{
        if (isTrue){
            image.setAttribute('src','https://images.unsplash.com/photo-1617289445306-46912970c4fc?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' )
        }
        else{
            image.setAttribute('src','https://images.unsplash.com/photo-1617287287784-7e6b90c6cfd7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')
        }  

        isTrue=!isTrue;
    },1000);



