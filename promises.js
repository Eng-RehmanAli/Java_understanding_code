const take=new Promise(function(resolove,rejected){
    setTimeout(function(){
        console.log("promise consume");

    },1000);
    resolove();
})

take.then(function(){
    console.log("I am Rehman Ali with the promise take ");
})
// here the promises (consume) case will take  place so it will be
//  happened after the 
new Promise(function(resolove,rejected){
    setTimeout(function(){
        console.log("Promise consume 2");
    },1000)
    resolove();

}).then(function(){
    console.log("i am also rehman ali ");
})

let promisethree=new Promise(function(resolove,rejected){
    setTimeout(function(){
        console.log('I am rehma ali');
    },1000)
})
promisethree.then(function(){
    console.log("The name is under proccess");
})
