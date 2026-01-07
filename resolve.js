
// traking the resolve only 
const onepromise=new Promise(function(resolove,reject){
    setTimeout(function(){
        resolove({username:"Rehman Ali",email:"Rehman@gmail.com",password:"1234454"})
    },1000)
})
onepromise.then(function(user){
   console.log(user);
})

// traking to the resolve and then also use the reject 
const promisfour=new Promise(function(reslove,reject){
    setTimeout(function(){
      let error=false;
      if(!error){
        reslove({username:"Rehman Ali",email:"Rehman@gmail.com",password:"1234454"})
      }else{
        reject("something went wrong");
      }
    },1000)
})
const take=promisfour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username); // this is example of the chaning 
}).catch(function(user){
    console.log(user);
}).finally(()=> console.log("The promise have  been procced"));
// console.log(take) from the object in the case of the promise we can not take the 
// value as it is  console.log(take)
