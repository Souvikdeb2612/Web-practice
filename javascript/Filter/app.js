 let menu=['butter chicken','paneer', 'sahi paneer', 'onion masala'];
 console.log(menu);

 function isVeg(food){
     if (food.toLowerCase().indexOf('chicken')===-1){
         return true;
     }
     return false;
 }

 
 function isJain(food){
    if (food.toLowerCase().indexOf('onion')===-1){
        return true;
    }
    return false;
}

let vegMenu=menu.filter(isVeg);
let jainMenu=vegMenu.filter(isJain);

console.log(vegMenu);
console.log(jainMenu);
