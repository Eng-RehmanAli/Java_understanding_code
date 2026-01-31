// let see how the deep copy will be made by the Object.assign() method while 
// it for the copy of the object so when we 
// apply the Object.assign()   then it will  take the reference of the inner objects 
// and make the shallow copy so 





/// how we cam make the deep copy we will see in the  next video 
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

let obj=Object.assign(one); // here  the object .assign is making the deifferner cpy according to the code ok. 
obj.subjects.totalcredithours.opp=67; // here we chnage the value of the obj not the one so take the result of the 
// one
console.log(one.subjects.totalcredithours.opp); //67 it is the result of the one not obj mean object pass by the reference not by  the
// copy so  keep it up and keep learning  thank so much  