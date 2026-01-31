// // // let see how to make the copy of the nested objects 

// let onE={
//     name:"Rehman ali",
//     Rollno:"24P-3078",
//     Subj:{
//         oop:"core",
//         src:"soft",
//         prob:"core",
//         totalcredhour:{
//             oop:4,
//             src:3,
//             prob:3,
//             finally:{
//              smemtercredithours:10  // it is our nested objects 
//             }
//         }
//     }
// }

// // //make the copy which will  be  deep 

//  let obj=JSON.parse(JSON.stringify(onE));
// // /// by this first all the data will  be sting at the first and then in to object and all the data will be copied



//  // make the inner working of the deep copy 



// function genral(obj){
//     if(typeof(obj)==="object" || typeof(obj)===null){
//         return obj;
//     }
//         let  data=Array.isArray(obj)?[]:{};
//         let key=obj.keys(obj);
//         for(let i=0;i<key.length();i++){
//             data[key[i]]==genral(obj[key[i]]);
//         }
    
//         return data;
// }

// let one={
//     name:"Rehman ali ",
//     roll:"24p-3078",
//     subjects:{
//         opp:3,
//         totalcredithours:{
//             opp:3,
//             lab:1,
//             sre:3,
//             totalagain:{
//                 mytotalcredithours:7
//             }
//         }
//     }
// } 

// let arr=[1,2,3,44,5,5];
// let result=genral(arr);
// console.log(result);


// how to make the deep copy logically

// so 
// take a function   
function genral(obj){ // here we will any value                   // we make the copy for the object and array simply then we should check it first so 
    if(typeof(obj)==='object'|| typeof(obj)===null){
        return obj;  // keeep in mind the null is also a object type
    }
// so
     // take the decision of the array or object 
     let data=Array.isArray(obj)?[]:{};
     // take the keys of the whole array or object why to put the position by poistions
     let  num=obj.keys(obj);
     for(let i=0;i<num.length();i++){
        data[num[i]]=obj[num[i]]; // why it is the array because it is in the key session;  
         }
         return data;
}
 let one={
    name:"Rehman ali ",
    roll:"24p-3078",
    subjects:{
        opp:3,
        totalcredithours:{
            opp:3,
            lab:1,
            sre:3,
            totalagain:{
                mytotalcredithours:7
            }
        }
    }
} 

let arr=[1,2,3,44,5,5];
let result=genral(one); // now pass the object 
console.log(result);


















