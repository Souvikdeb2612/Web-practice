// Slow method
// var n =process.argv.slice(2);

// for(let i=0;i<=n;i++){
//     if(i%3===0){
//         console.log('fizz');
//     }
//     else if(i%5===0){
//         console.log('Buzz');
//     }
//     else if(i%3===0&&i%5===0){
//         console.log('fizzBuzz');
//     }
//     else{
//         console.log(i);
//     }

// }


// Faster method

// function fiizzBuzz(n){
    
//     for (let i=0;i<=n;i++){
//         let str="";
//         if(i%3===0){
//             str+='fizz';
//         }
//         if(i%5===0){
//             str+='Buzz';
//         } 
//         if(str==''){
//             str+=i;
//         }
//         console.log(str);
//        }

       
// }

// fiizzBuzz(20)



// Optimized method

function fizzBuzz(n){
    cnt3=0;
    cnt5=0;
    for (let i=0;i<=n;i++){
        let str="";
        if(cnt3===3){
            str+="fizz";
            cnt3=0;
        }

        if(cnt5===5){
            str+="Buzz";
            cnt5=0;
        }
        if(str===""){
            str+=i;
        }
        console.log(str);
        cnt3++;
        cnt5++;

    }
}

fizzBuzz(20);