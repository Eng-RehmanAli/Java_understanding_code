// singleton 
// what is the singleton ?
/*Basic Idea:

Only one instance of a class/object exists.

It’s shared globally.

Useful when you need a single source of truth, like:

App configuration

Database connection

Logging system*/

/*object litral
*/
// the obje like 

// here name is treated as a string 
let mysym=Symbol("Rehman ALi"); 
let one=Symbol("Rehman ALi")
console.log(mysym)
// it is called object literal 
const obj={
    name:"Rehman alI",
    bool:"Rehman alI",

}
console.log(obj.bool);
/* we  can  use teh key words a key in the keys of the object  but not in the simple form it will use in th es
string like 
we cam use the object.freez in the js to  prevent the objct form the chnage 

*/
const check={
    "var":"Shazand",
    "let":"Let is a case",
    "Full name":"Zeehsna and Zeeshan",
    "const":"const ",
     you:function(x){
         return x*45;
     }

} 
// s
//  Object.freeze(check);
// check.var="You are the great one";
// console.log(check.var)
check.greet=function(){ 
    // console.log(`helio mrs ${this.var}`)
    return 3*4
}
console.log(check.greet())
/*Shazand
Let is a case
Zeehsna and Zeeshan
const
Shazand this is a previous mean it freezn no we ca not use it */



/*2️⃣ Why console.log(check.greet()) prints undefined too

check.greet() already prints the greeting using console.log.

But console.log(check.greet()) is trying to print the return value of check.greet().

Your greet function does not return anything, so it implicitly returns undefined.

So you get:

helio mrs undefined  <-- from inside greet()
undefined            <-- from console.log of return value*/ 




                //------------------------------- ----------------------------------- 
                // what is the singleton object 
                // /let tak=new Object();  
                //  is called singleton onject 


// Object.assign=(targert,assocation) mean in the target all the association will store like
//like 
const obj1={1:"wer",2:"sdf",3:"r"}
const obj2={1:"wer",2:"sdf",3:"r"}
let take=Object.assign({},obj1,obj2)
let  res={...obj1,...obj2}
console.log(res)
console.log(Object.keys(res))// it return the array of  the keys o fthe object
/* answer 
Think about it: an object can have multiple keys. JavaScript cannot just print them in a single string in a structured way for further use.

Returning an array allows you to:

Iterate over the keys easily with forEach, map, or for...of.

Access a specific key using an index (keys[0], keys[1], etc.).

Use array methods to manipulate or filter keys.*/
// hasownProperty it will check it has  specified propert in the aticuler object  ex
console.log(obj1.hasOwnProperty("t"))
console.log(obj1.hasOwnProperty(1)) // it take the  key and then decide it has in the obj or not 
console.log(Object.values(res))


