// react  terminat to the  oop and it  take the functionalprogramig by  using the functional programming technices

// React algorithm in the  dom rendering is Fiber 

// package.json give us the exact version information 

// online complier for the react is jsbin

// https://jsbn.com/key/versionnumber/mode 

// react-detecor it will show which one is using the  react and which one is using the other 

// what is the yarn in the react ?

// it is the anothe pakage installer from the facebook.

// the work of the npm abd yarn is same as the npm 


// what is the Dhtml ?
// Dynamic HTML: THE simple name of the using the html+css+js and make the web which make the chnage with out reloading the 
// whowl page

// AJSX ;Asyncronis jsva script and XML 


// XML: extensible marku language  
// it  a way of the  structured data 


// It is a way to store and send data in a structured format.

// in the 1995 the js was introduce 


// template literal (``) we can  use for the variable in to one string  like (`${},${},${}`) in the real tempalets ate the ${}  

// and the string is `` so template string is `${}`


// in the arrow function we  can use  the only one argument with out the brakets 



// js  has the garbage collector in the behind and if the object has not any refrence in the behind then the 

// garbage cllector will delte it automaticlly 


// like  let e= new ("oops")
// console.log(e.message)
// console.log(e.stack)
// console.log(e.name)

// mean when we the throw teriminate the code it will return  the object so 
// and  when the 
// e=null garbage collector will delete it automaticcly 


// vaScript has automatic garbage collection ✅

// Garbage collector runs in the background

// It looks for objects that are no longer referenced

// If nothing points to an object, it’s removed from memory automatically

// very impotant  pint?
// this only work inside the function 
// not in the object and not anywhere

// const taje={
//     name:"Rehman ali",
//     RoLLNO:"24P-3078",
//     CALL:function call(){
//         console.log(`${this.name} by the sangle hill  `);
//          console.log(this)
//     }
//     ,
//     check:console.log(this)
// }
// // taje.CALL();
// console.log(taje.check); 


// here the this will be global and in the editor the global obejct is empty and in the case of the 
// broswer it will be window 


// function one(){
//     console.log(this)
// }
// one(); 
// what is happing here 

// (this) approch to  the 



// what will happen in the 


// arrow function  has not this keyword but why ?


// const taje={
//     name:"Rehman ali",
//     RoLLNO:"24P-3078",
//     CALL:function call(){
//         console.log(`${this.name} by the sangle hill  `);
//          console.log(this)
//     }
//     ,
//     check:this
// }
// // taje.CALL();
// console.log(taje.check);
// here it will not give you undefine it will give you {} global  in the editor


// butt here  
// const taje={
//     name:"Rehman ali",
//     RoLLNO:"24P-3078",
//     CALL:function call(){
//         console.log(`${this.name} by the sangle hill  `);
//          console.log(this)
//     }
//     ,
//     check:console.log(this)
// }
// // taje.CALL();
// console.log(taje.check); 
  
// object name taje was not creating now and we are excuting to the consol.log() so that is why it is undefine 




// question is
// const taje={
//     name:"Rehman ali",
//     RoLLNO:"24P-3078",
//     CALL:function call(){
//         console.log(`${this.name} by the sangle hill  `);
//          console.log(this)
//     }
//     ,
//     check:console.log(this)
// }
// // taje.CALL();
// console.log(taje.check);  check giving us the {} why?
// because it is not using the function inside it and this will work in the function so that is why it is not getting the 
// global object 


// function one(){
//     console.log(this)
// }
// one();
//  in that  this is  in the function so it is getting the global object 



// const tahoe = {
//   resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
//   print: function(delay=1000) {
//     setTimeout(function() {
//       console.log(this.resorts.join(", "))
//     }, delay)
//   }
// }


// why it is not runing  ?
// because the nested function in a function will out of the presence object like this 

// The nested function does not automatically “remember” the outer object
   



// const taje = {
//   name: "Rehman ali",
//   CALL: function () {
//     console.log(this);
//   }
// };

// taje.CALL();
 
// in that this is in the object so it will represet it 

// question why the function is impotent for the this?

// Functions are like “doors” for this

// When you call a function, JavaScript asks:

// “Who is calling this function?”

// Called as obj.method() → this = obj

// Called as func() → this = global object

// Called with new → this = new object created



// n Node.js
// function test() {
//     console.log(this);
// }
// test();


// Normal function call → this points to Node’s global object, called global.

// That’s why you see all those built-in functions like setTimeout, fetch, etc.

// 2️⃣ In the Browser
// function test() {
//     console.log(this);
// }
// test();


// Normal function call → this points to browser’s global object, called window.

// You’d see things like document, navigator, alert, etc.



// in the arrow function this inherete the property  by the parent and like 


//  fun2:()=>{
//   console.log(this.username);
// }
//  go to the parent and  then in the parent no usrename is predefine so it will be undefine 


// for the nested function we use the arrow function  becuae they take the this from parent not present object take an example 


// const tahoe = {
//   resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
//   print: function(delay = 1000) {
//     setTimeout(() => {
//       console.log(this.resorts.join(", "))
//     }, delay);
//   }
// }

// tahoe.print();
 
// now  it will go out of the function and then it will take the resorts so 
//  in the case of the  this use the  arrow function as a nested 


// if the both are the arrow then the globla will be window because arrow will skip to the present because it  take the values from the surronding \




// distructuring in the js is take the values from the array and objects and keep it in the variables 


// when we make the 


// let sandwhic={
//     meat:"chicken",
//     source:"white",
//     egg:"3",

// }

// let {meat,source}=sandwhic;

// let {meat,source}=sandwhic;

// now the 
// we are making the
// in this seen 
//   let meat=sna=sandwhic.meat; it will copy the value and then let meat has no connection with the object 
// mean copy the value  but not take the reference by the object 


// trime remove the spave from the string 

// function  parameters distructring is use for the direct value from the object and arrays





// let   one="rhman ali";
// console.log(`${one} i am a software engineers`);
//  const two=(one)=> { 
//     return `${one} i am rehman ali`}
//  console.log(two(one));
//  var  you="rehman ali ";
//  {
//   var you="zeeshan";
//   var  you="zaman ali";
//  }

//  console.log(you)
//  const test=(first,second)=>{
//     if(!first){
//         throw new console.error("The one is not valid");
//     }
//     if(!second){
//         throw new console.error("ThE SECOND ONE IS MISSING");
//     }
//     return `${first} and ${second}`
//  }

// console.log(test("Rehamn "));


// const taje={
//     name:"Rehman ali",
//     RoLLNO:"24P-3078",
//     CALL:function call(){
//         console.log(`${this.name} by the sangle hill  `);
//          console.log(this)
//     }

// }
// taje.CALL() 


// function one(){
//     console.log(this)
// }
// one();


// function one(){
//     let username="Rehman ALi";
//     console.log(this.username);
// }
// one();

// two=()=>{
//     let username="Rehman ali";
//     console.log(this.username);
// }
// two();

// const obj={
//   username:"Rehman ali",
//    price:"345345",
//     fun1:function(){
//         console.log(this.username);

//     },
//     fun2:()=>{
//         console.log(this.username);
//     }

// }
// obj.fun1();
// obj.fun2();


// why it is giving us the undefine  becuse it 
// it arrow is the global and give the global object proerty   then it 
// will be go in the genral function because it is the indepnedent function then like the plain function 
// so it will see the global  node js in the function and in the broswer it would be window 
// const  tahoe = {
// username:"rehman ali ",
// print:()=>{
//       // the settime out  is the  independent  plain function so it woud be see the global 
//     setTimeout(function(){
//      console.log(this.username);
//     },1000)
// }
// }
// tahoe.print();

// let sandwhic={
//     meat:"chicken",
//     source:"white",
//     egg:"3",

// }

// let {meat,source}=sandwhic;
// console.log(meat,source);
// // we can  use it in any other useage
// let infor= `i am rehman ali and i want to take the ${meat} and ${source}`;
// console.log(infor);
// sandwhic.meat="motten";
// console.log(sandwhic.meat);
// console.log(meat,source);
// let sandwhic={
//     meat:"chicken",
//     source:"white",
//     egg:"3",

// }

// let {meat,source}=sandwhic;

// let {meat,source}=sandwhic;

// now the 
// we are making the
// in this seen 
//   let meat=sna=sandwhic.meat; it will copy the value and then let meat has no connection with the object 
// mean copy the value  but not take the reference by the object 



// function distructuring in the js 
  // in the case of the function disctructring we give the empty object in the case of the defult parameter 

//  console.log(one());

 // let take a logic 





// prompt is for the browser and not for the node.js 
// for the node js i have the 
  



// let one=({test="ANALZI SMATNI UMI HEADER"}={})=>{
//     return `my mom say ${test}`;
// }
// const { constants } = require("buffer");
// // require is a function to read the line 
// let readline=require("readline");
// let read=readline.createInterface({
//      input:process.stdin,
//      output:process.stdout,
// })

// read.question("Enter your name",(take)=>{
//        if(take.trim()===""){
//         console.log(one())
//        }else{
//         console.log(one({test:take}));
//        }
//        read.close();
// });



// arry distructring 

// we can copy the array by usin the  comparision of the array like that 
// let arra=["kjsladhf","askjdhf","kashdf"];
// let   [a,b,c]=["kjsladhf","askjdhf","Rehman ali"]; // left side should be the varables array
// console.log(kashdf);


// object literal  enhancement
// question is that it will take the more time as compare to othe object because the both
// key and  valeu is same 
// answer is: NO BECUASE it will take see the value as the key and it value dierctly by the  variable  name  becuse key and the 
// vale  both are made by the varables
// let Name="Rehman ali";
// let job="developer";
// let  salary=45345;
// let rank="19";

//  let one={Name,job,salary,rank};
//  // it is equall to 
//  let one={
//     Name:Name,
//     job:job,
//     salary:salary,
//     rank:rank
//  } when in the key and vakues  are same  
//     // console.log(one.Name);

//     let fun=function person(){
//          return ` i am fun 1`;
//     }
//     let fun1=function person(){
//          return ` i am fun 2`;
//     }
//     let fun2=function person(){
//          return ` i am fun 3`;
//     }
//     let one={fun,fun1,fun2}
//    console.log(one.fun1());





// spread operator 

// function check(...arg){
//     let a=[...arg];  
//     console.log(a);
    // result is
//     [
//   [
//     '1',    '2',    '3',
//     '4',    '5',    '6',
//     '7',    '8',    '8',
//     '19',   '1435', '3451',
//     '3451'
//   ]
// ]
    
// }

// let onE=["1","2","3","4","5","6","7","8","8","19","1435","3451","3451"]
// check(onE);
// let twO=["1345","3452","3453","3454","355","6345","7345","8345","8345","134593","2341435","2343451","2343451"]
// let THrre=["er1","223sd","3dsf","4ert","5sdgf","6sdfg","7sdfg","dfsg8","asd8","cvxb19","1cv 435","cv b3451","cb3451"]
// let [first,...rest]=onE;
// let four=[...onE,...THrre,...twO];
// console.log(four);
// result is 
// [
//   '1',        '2',       '3',       '4',
//   '5',        '6',       '7',       '8',
//   '8',        '19',      '1435',    '3451',
//   '3451',     'er1',     '223sd',   '3dsf',
//   '4ert',     '5sdgf',   '6sdfg',   '7sdfg',
//   'dfsg8',    'asd8',    'cvxb19',  '1cv 435',
//   'cv b3451', 'cb3451',  '1345',    '3452',
//   '3453',     '3454',    '355',     '6345',
//   '7345',     '8345',    '8345',    '134593',
//   '2341435',  '2343451', '2343451'
// ]




   // how it is working in this it will make the copy the  ...onE by using the []  mean new array  
//  let [take]=[...onE].reverse();
//  console.log(take)
//  console.log(onE)





// spread operator in the objects 

// let one={
//     name:"Rehman ali",
//     Roll$:"24p-3078",
// };
// let two={
//     ...one,
//     dep:"softwear"
// };
// console.log(two);





// what is the promise?
// promise use in the Async programming  
// fetch the data from the api and other  , it can  be represent as it is a object that will be represent in the future 
//     


//           states
   // rejected and resolve pending.
//        let getmember=(count)=>new Promise((resolve,rejected)=>{
//         let api= `https://api.randomuser.me/?nat=US&results=${count}`
//        let request= new XMLHttpRequest();
//         request.open('GET',api);
//         request.setRequestHeader("Content-Type","application/json");
//        request.onload=()=>{
//          (request.status==2000)?resolve(JSON.parse(request.response).result):
//          rejected(Error(request.status));
//                }
//           request.onerror=(err)=>{
//             return rejected(err);
//           }
//         request.send();
//    }).then((member)=>{
//      console.log(member);
//    }).catch((err)=>{
//       console.log(err);
//    }).finally(()=>console.log("The promiser  is ether is resolve or rejected "));
  





// objec and class inheretnece and the protoypr undeberstanding in the casef of  the proto to prototype 



// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//      seyhi() {
//       console.log(`hey  ${this.name,this.age} champ `);   
//     }
// }
// let  one=new person("Rehman ALI",45);
// // let  TWO=new person("Zeeshan  ALI",49);
// console.log(one);
//person { name: 'Rehman ALI', age: 45 } question is here why it is not showing the function of the  class
// answer the class make the own prototype and js will say to the all object inherete the  all function from the 
// class person prototype 
// that is why the every object has not function the main seen to understand  is prototype 

// let see the class inheretence in the js 

// use  the extend and super for the inhretnce main tool of the inheretence
// so 


// class person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     // for the any type method like
//     seyhi(){
//         return ` hy ji`
//     }
// }
// // see the inheretence
// // sorry we forget about the extend key 
// class Customer extends person{
//     constructor(name,age,price,wieght){
//         // one main thing is that give the required paramtes to the parent class 
//          super(name,age);
//         this.price=price;
//         this.wieght=wieght;
        
        
//     }

//     disply(){
//         return ` sir ${this.name,this.age} and your wieght is ${this.wieght} and total price is ${this.price} `
//     }
// }
// //so make the object
// let one=new Customer("Rehman ali",23,34534,6)
// console.log(one.disply());
// // let see the result  press the  ctrl+telda ~  open the terminal 
// // some time you will see the saving file issues like we have facing so



// object inheretence
// const obj={
//     name:"Rehman ali ",
//     roll:"345p-345"
// }
//   let obj2=Object.create(obj);
//   obj2.account="weiury";
//   console.log(obj.account); // see the obj.account is giving the account while it is inhereted in the obj2 
//   console.log(obj2.name);
//   console.log(obj2.roll);


  // why it is the undefine in the obj of the obj2 like    console.log(obj.account);  becaue the the prototype of the
// obj2 is the obj so it  has the relation no  onto  so that is the obj2.account is the key and value of the 
// obj2 that is the obj is giving the undefine  mean no add in the prototype in the by the obj2 so 



// we can export multile function and the files my using the export 


// // let make the function as a fisrt member in the function 
//  // take the function in the variable

//  let fun1=()=>{
//   return ` i am function 1`
//  }
//  function fun2(x){ //  or function will be treat as a variable so 
//    console.log(x()); // add the semi-colon to prevent the complier the distraction so 
//  }
//  // let call to the function 
//  fun2(fun1); //i am function 1 result is here 



 // function can be used as  a value and  variables in the  js 


//  let log=(message)=>{
//    return (message);
//  }


// function as value 
//  let obj={
//   message:"analzi samtani umi haeder",
//   log(message){
//     console.log(message)
//   }
//  }
//  obj.log("i am rehman ali ")
  

// function in the array 

// let array=["i am rehman ali ",(x)=>console.log(x),
//   "you are  shazad ali",
//   (x)=>console.log(x)];
// array[1](array[2]);
// n functional programming, functions flow through your program the same way data does.
// let one=(x,z)=>{
//   console.log(z);
//      return (message)=>{
//       return x(message.toUpperCase()+'!!');
//      }
// }
// let take=one(y=>console.log(y),"start");
// take("i am  rehman ali")
 
// higher order functions  mean take the function in the parameters and then return  a function 
// createScream
//      │
//      ▼
// ┌──────────────┐
// │ takes logger │
// └──────────────┘
//      │
//      ▼
// ┌────────────────────────┐
// │ returns new function   │
// │ that remembers logger  │  ← closure
// └────────────────────────┘
//      │
//      ▼
//    scream("hello")
//      │
//      ▼
//   "HELLO!!!" → console.log

   // Rehmna-ali   this is a impremative implemantaion and the 
        // let main="Rehmna ali";
        // let second=" ";
        // for(let i=0;i<main.length;i++){
        //   if(main[i]===" "){
        //     second+="-";
        //   }else{
        //     second+=main[i]
        //   }
        // }
        // console.log(second);
        // declarative   Rehmna-ali REHMNA ALIevery thing will be better  it is declarative 
        //  console.log(main.toLocaleUpperCase()+"every thing will be better ");


        // how to prvent the object by the  immutablity and  and functional programmming refres to the 
        // immutablity 
         
        //  const obj={
        //   name:"Rehman ali",
        //   roll:"24P-3078",
        //   color:"0FFF",
        //   rating:"0"
        //  }

         // make the copy of the obj for the work so 
             // it use the Object.assign and in this we can make the change in given object it will be in the copy  
          //  function genral(obj){
          //   return Object.assign({},obj);
          //  }
          //  let result=genral(obj);
          //  console.log(result);


          // how to make the mutablity copy of the array 
           //  it will use the push  
           
           
           let array=[
          {title:"Rehman ali"},
           { title:"Rehman ali"},
           { title:"Rehman ali"},
           { title:"Rehman ali"},
           { title:"Rehman ali"}];                                          
      function genral(x,y){
        // use to the push to chnage any thing in  the object so 
      return [...x,({y})];
      }
      let result=genral(array,"Yes");
      console.log(result);
// { title: 'Rehman ali' },
//   { title: 'Rehman ali' },
//   { title: 'Rehman ali' },
//   { title: 'Rehman ali' },
//   { title: 'Rehman ali' },
//   { title: 'Rehman ali' },
//   { y: 'Yes' }   it is  by the push of the x.push({y}) mean psuh the it at the end  of the array 


     function newarrat(arr,ntitle,yarn){
     return  arr.map(item=>({ // add the () before the {} because it will make the object and function scpe difference 
            ...item,
        title:ntitle,
          yarn   // we can add the  value and its key  simple puting the key and its value will be directly as it      
     }))
     }
   let eresult =newarrat(array,"yes","namaz");
   console.log(eresult)
// result

// [
//   { title: 'yes', yarn: 'namaz' },
//   { title: 'yes', yarn: 'namaz' },
//   { title: 'yes', yarn: 'namaz' },
//   { title: 'yes', yarn: 'namaz' },
//   { title: 'yes', yarn: 'namaz' }
// ]